// classe View du MVC
class View {
    // Constructeur de la vue qui initialise le canvas et les boutons
    constructor() {
        this.canvas = document.getElementById('my_canvas');
        this.ctx = this.canvas.getContext('2d');

        this.cellSize = 47;
        this.statusTime = false;
        this.statusPheromone = true;
        this.toggleClock();
        this.togglePheromone();
    }

    display(grid) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        let nbLines = grid.length;
        let nbColumns = grid[0].length;
        this.canvas.width = nbColumns * this.cellSize;
        this.canvas.height = nbLines * this.cellSize;
        this.ctx.fillStyle = "#72751b";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);


        for (let i = grid.length - 1; i >= 0; i--) {
            for (let j = grid[i].length - 1; j >= 0; j--) {
                let tile = grid[i][j];
                switch (tile.type) {
                    case "herbe":
                        let randX = 4 + i % 4;
                        let randY = j % 4;
                        this.ctx.drawImage(GRASS_IMAGE, randX * 32, randY * 32, 32, 32, j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize);

                        let proportional = Math.log10(tile.pheromone * (10 - 1) + 1) * ((this.cellSize - 5) / 2) / 2;

                        if (this.statusPheromone) {
                            this.ctx.font = "bold 14px Arial";
                            this.ctx.fillStyle = this.colorChooser(proportional);
                            this.ctx.fillText(tile.pheromone.toFixed(2), j * this.cellSize + 15, i * this.cellSize + this.cellSize / 2 + 6);
                        } else {
                            if (tile.pheromone > 0) {
                                this.ctx.beginPath();
                                this.ctx.arc(j * this.cellSize + this.cellSize / 2, i * this.cellSize + this.cellSize / 2, Math.min(proportional, 22), 0, 2 * Math.PI);
                                this.ctx.fillStyle = this.colorChooser(proportional);
                                this.ctx.fill();
                                this.ctx.closePath();
                            }
                        }
                        break;
                    case "arbre":
                        this.ctx.drawImage(SHADOW_IMAGE, 0, 32, 128, 128, j * this.cellSize - 5, i * this.cellSize, this.cellSize, this.cellSize);
                        this.ctx.drawImage(TREE_IMAGE, 0, 0, 160, 160, j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize); // 160x160
                        break;
                    case "nourriture":
                        let percent = this.cellSize * tile.etat / 100;
                        if (percent == 0) {
                            percent = 0;
                        } else if (percent < 15) {
                            percent = 15;
                        }

                        this.ctx.drawImage(HEXTILES_IMAGE, 0 * 32, 14 * 32, 32, 32, j * this.cellSize + (this.cellSize - percent) / 2, i * this.cellSize + (this.cellSize - percent) / 2, percent, percent);
                        break;
                    case "colonie":
                        this.ctx.drawImage(HEXTILES_IMAGE, 1 * 32, 20 * 32, 32, 32, j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize);
                        break;
                    default:
                        console.error("Error: Invalid tile - " + tile);
                }
            }
        }
    }

    displayAnt(ant) {
        let image = this.orientation(ant);
        this.ctx.drawImage(image, ant.position.x * this.cellSize, ant.position.y * this.cellSize, this.cellSize / 2, this.cellSize / 2);
    }

    orientation(ant) {
        let dx = ant.direction.dx;
        let dy = ant.direction.dy;
        if (dx == 0 && dy == -1) {
            return ANT_TOP_IMAGE;
        } else if (dx == 0 && dy == 1) {
            return ANT_BOT_IMAGE;
        } else if (dx == 1 && dy == 0) {
            return ANT_RIGHT_IMAGE;
        } else {
            return ANT_IMAGE;
        }
    }

    // Bindings pour le temps
    bindGetTime(callback) {
        this.getTime = callback;
    }

    // Bindings pour le reset du temps
    bindResetTime(callback) {
        this.resetTime = callback;
    }

    // Fonction qui affiche le temps
    displayTime(time) {
        let clock = document.getElementById('clock');
        clock.innerHTML = time;
    }

    // Fonction qui lance ou arrete le temps en fonction du bouton
    toggleClock() {
        let statusB = document.getElementById('toggle-time');
        statusB.addEventListener('click', () => {
            if (this.statusTime) {
                this.statusTime = false;
                statusB.innerHTML = "Start";
                this.resetTime();
            } else {
                this.statusTime = true;
                statusB.innerHTML = "Stop";
                this.getTime();
            }
        });
    }

    // Fonction qui change le type d'affichage des pheromones
    togglePheromone() {
        let statusP = document.getElementById('toggle-pheromone');
        statusP.addEventListener('click', () => {
            if (this.statusPheromone) {
                this.statusPheromone = false;
                statusP.innerHTML = "Pheromones";
            } else {
                this.statusPheromone = true;
                statusP.innerHTML = "Valeur";
            }
        });
    }

    // Fonction qui choisi la couleur en fonction de la valeur des pheromones
    colorChooser(value) {
        let color = "";
        if (value > 20) {
            color = "#7a0014";
        } else if (value > 18) {
            color = "purple";
        } else if (value > 16) {
            color = "#ff00ff";
        } else if (value > 14) {
            color = "#8c3ddb";
        } else if (value > 12) {
            color = "#535ce0";
        } else if (value > 10) {
            color = "#727af2";
        } else if (value > 8) {
            color = "#858cf2";
        } else if (value > 6) {
            color = "#a5aafa";
        } else if (value > 4) {
            color = "#c8cbfa";
        } else {
            color = "#ffffff";
        }
        return color;
    }

}
