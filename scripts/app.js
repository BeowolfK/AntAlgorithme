// classe Arbre pour renvoyer un type d'objet
class Arbre {
    constructor() {
        this.type = "arbre";
    }
}

// classe Colonie pour renvoyer un type d'objet
class Colonie {
    constructor() {
        this.type = "colonie";
    }
}

// classe Herbe pour le type et les pheromones
class Herbe {
    constructor() {
        this.type = "herbe";
        this.pheromone = 0;
    }

    incrementPheromone() {
        this.pheromone += 0.01;
    }

    decrementPheromone() {
        if (this.pheromone > 0) {
            this.pheromone -= 0.001;
        }
    }
}

// classe Nourriture pour le type et l'état
class Nourriture {
    constructor() {
        this.type = "nourriture";
        this.etat = 100;
    }

    decrementEtat() {
        this.etat -= 1;
    }
}

// classe Model du MVC
class Model {
    // Constructeur du model qui initialise la grille et le temps
    constructor() {
        this.grid = [
            [new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre()],
            [new Arbre(), new Arbre(), new Arbre(), new Herbe(), new Herbe(), new Herbe(), new Arbre(), new Arbre(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Herbe(), new Herbe(), new Arbre(), new Arbre(), new Arbre(), new Arbre()],
            [new Arbre(), new Arbre(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Herbe(), new Herbe(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Herbe(), new Herbe(), new Nourriture(), new Arbre()],
            [new Arbre(), new Nourriture(), new Herbe(), new Herbe(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Herbe(), new Arbre()],
            [new Arbre(), new Herbe(), new Arbre(), new Arbre(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Herbe(), new Arbre()],
            [new Arbre(), new Herbe(), new Herbe(), new Herbe(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Herbe(), new Herbe(), new Herbe(), new Herbe(), new Herbe(), new Arbre()],
            [new Arbre(), new Arbre(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Herbe(), new Herbe(), new Arbre(), new Arbre(), new Arbre(), new Herbe(), new Arbre(), new Arbre(), new Arbre(), new Arbre()],
            [new Arbre(), new Arbre(), new Arbre(), new Herbe(), new Herbe(), new Herbe(), new Arbre(), new Arbre(), new Arbre(), new Herbe(), new Arbre(), new Arbre(), new Arbre(), new Herbe(), new Arbre(), new Arbre(), new Arbre(), new Arbre()],
            [new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Herbe(), new Herbe(), new Arbre(), new Arbre(), new Herbe(), new Herbe(), new Herbe(), new Herbe(), new Herbe(), new Arbre(), new Arbre(), new Arbre(), new Arbre()],
            [new Arbre(), new Herbe(), new Herbe(), new Herbe(), new Herbe(), new Herbe(), new Herbe(), new Herbe(), new Herbe(), new Colonie(), new Herbe(), new Arbre(), new Arbre(), new Herbe(), new Arbre(), new Arbre(), new Arbre(), new Arbre()],
            [new Arbre(), new Herbe(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Herbe(), new Herbe(), new Herbe(), new Arbre(), new Arbre(), new Herbe(), new Arbre(), new Arbre(), new Arbre(), new Arbre()],
            [new Arbre(), new Herbe(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Arbre(), new Arbre(), new Herbe(), new Arbre(), new Arbre(), new Arbre(), new Arbre()],
            [new Arbre(), new Herbe(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Herbe(), new Herbe(), new Herbe(), new Arbre(), new Herbe(), new Arbre(), new Arbre(), new Herbe(), new Arbre(), new Arbre(), new Arbre(), new Arbre()],
            [new Arbre(), new Herbe(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Herbe(), new Herbe(), new Herbe(), new Herbe(), new Arbre()],
            [new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Herbe(), new Herbe(), new Herbe(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Arbre(), new Arbre(), new Arbre(), new Herbe(), new Arbre()],
            [new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Arbre(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Arbre(), new Herbe(), new Herbe(), new Nourriture(), new Herbe(), new Herbe(), new Arbre()],
            [new Arbre(), new Herbe(), new Herbe(), new Herbe(), new Arbre(), new Nourriture(), new Arbre(), new Arbre(), new Herbe(), new Herbe(), new Herbe(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre()],
            [new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre(), new Arbre()]
        
        ];
        this.time = "00:00"; // Secondes:Microsecondes
    }

    // Bindings pour l'affichage
    bindDisplay(callback) {
        this.display = callback;
    }

    // Fonction qui lance le jeu
    play() {
        this.display(this.grid);
    }

    // Bindings pour le temps 
    bindDisplayTime(callback) {
        this.displayTime = callback;
    }

    // Fonction qui remet a zero toutes les cases
    resetTile() {
        for (let i = this.grid.length - 1; i >= 0; i--) {
            for (let j = this.grid[i].length - 1; j >= 0; j--) {
                let tile = this.grid[i][j];
                if (tile.type == "herbe") {
                    tile.pheromone = 0;
                }
                if (tile.type == "nourriture") {
                    tile.etat = 100;
                }
            }
        }
    }

    // Fonction qui met a zero le temps
    resetTime() {
        clearInterval(this.counter);
        this.resetTile();
        this.time = "00:00";
        this.displayTime(this.time);
    }

    // Fonction qui arrete le temps
    stopTime() {
        clearInterval(this.counter);
    }

    // Fonction qui lance le temps et démarrer la clock
    getTime() {
        this.counter = setInterval(() => { 
            let time = this.time.split(":");
            let seconds = parseInt(time[0]);
            let microseconds = parseInt(time[1]);

            microseconds += 1;
            if (microseconds == 100) {
                microseconds = 0;
                seconds += 1;
            }

            this.time = seconds.toString().padStart(2, '0') + ":" + microseconds.toString().padStart(2, '0');
            this.displayTime(this.time);
            this.checkNourriture();
            this.decrementAllPheromone();
        }, 10);
    }

    checkNourriture() {
        let qty_nourriture = 0;
        for (let i = this.grid.length - 1; i >= 0; i--) {
            for (let j = this.grid[i].length - 1; j >= 0; j--) {
                let tile = this.grid[i][j];
                if (tile.type == "nourriture") {
                    qty_nourriture += tile.etat;
                }
            }
        }
        if (qty_nourriture == 0) {
            this.stopTime();
        }
    }

    decrementAllPheromone() {
        for (let i = this.grid.length - 1; i >= 0; i--) {
            for (let j = this.grid[i].length - 1; j >= 0; j--) {
                let tile = this.grid[i][j];
                if (tile.type == "herbe") {
                    tile.decrementPheromone();
                }
            }
        }
    }
}

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

    // Fonction qui affiche la grille avec les bonnes images
    display(grid){
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

                        let proportional = Math.log10(tile.pheromone * (10 - 1) + 1) * ((this.cellSize - 5) / 2) ;

                        if (this.statusPheromone) {
                            this.ctx.font = "bold 14px Arial";
                            this.ctx.fillStyle = this.colorChooser(proportional);
                            this.ctx.fillText(tile.pheromone, j * this.cellSize + 15, i * this.cellSize + this.cellSize / 2  + 6);
                        } else {
                            this.ctx.beginPath();
                            this.ctx.arc(j * this.cellSize + this.cellSize / 2, i * this.cellSize + this.cellSize / 2, proportional, 0, 2 * Math.PI);
                            this.ctx.fillStyle = this.colorChooser(proportional);
                            this.ctx.fill();
                            this.ctx.closePath();
                        }
                        break;
                    case "arbre":
                        this.ctx.drawImage(SHADOW_IMAGE, 0, 32, 128, 128, j * this.cellSize - 5, i * this.cellSize, this.cellSize, this.cellSize);
                        this.ctx.drawImage(TREE_IMAGE, 0, 0, 160, 160, j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize); // 160x160
                        break;
                    case "nourriture":
                        this.ctx.drawImage(HEXTILES_IMAGE, 0 * 32, 14 * 32, 32, 32, j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize);
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
        if(value > 20){
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
        }else if (value > 8) {
            color = "#858cf2";
        }else if (value > 6) {
            color = "#a5aafa";
        }else if (value > 4) {
            color = "#c8cbfa";
        }else {
            color = "#ffffff";
        }
        return color;
    }

}

// classe Controller du MVC
class Controller {
    // Constructeur du controller qui initialise le model, la vue, et les bindings
    constructor(model, view) {
        this.model = model
        this.view = view

        // Affectation pour les bindings

        this.bindDisplayTime = this.bindDisplayTime.bind(this);
        this.model.bindDisplayTime(this.bindDisplayTime);
        
        this.bindGetTime = this.bindGetTime.bind(this);
        this.view.bindGetTime(this.bindGetTime);
        
        this.bindResetTime = this.bindResetTime.bind(this);
        this.view.bindResetTime(this.bindResetTime);
        
        this.model.bindDisplay(this.bindDisplay.bind(this))
        this.model.play()
    }

    // Fonction de bindings entre le model et la vue

    bindDisplay(grid) {
        this.view.display(grid)
    }

    bindDisplayTime(time) {
        this.view.displayTime(time);
    }

    bindGetTime() {
        this.model.getTime();
    }

    bindResetTime() {
        this.model.resetTime();
    }

}

// Initialisation des images
const HEXTILES_IMAGE = new Image();
HEXTILES_IMAGE.src = 'assets/foodAndColony.png';

const TREE_IMAGE = new Image();
TREE_IMAGE.src = 'assets/tree.png';

const ANT_IMAGE = new Image();
ANT_IMAGE.src = 'assets/ant.png';

const GRASS_IMAGE = new Image();
GRASS_IMAGE.src = 'assets/grass.png';

const SHADOW_IMAGE = new Image();
SHADOW_IMAGE.src = 'assets/shadow.png';

Promise.all([
    new Promise((resolve) => { 
        HEXTILES_IMAGE.addEventListener('load', () => { resolve(); }); 
    }),
    new Promise((resolve) => { 
        TREE_IMAGE.addEventListener('load', () => { resolve(); });
    }),
    new Promise((resolve) => { 
        ANT_IMAGE.addEventListener('load', () => { resolve(); });
    }),
    new Promise((resolve) => { 
        GRASS_IMAGE.addEventListener('load', () => { resolve(); });
    }),
    new Promise((resolve) => { 
        SHADOW_IMAGE.addEventListener('load', () => { resolve(); });
    })
]).then(() => {
    const app = new Controller(new Model(), new View())
});