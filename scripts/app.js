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
            this.pheromone -= this.pheromone * 0.001;
        } else {
            this.pheromone = 0;
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
        this.fourmis = [];

        // Mouvement
        this._startTime = Date.now();
        this._lag = 0;
        this._fps = 60; // Frame rate.
        this._frameDuration = 1000 / this._fps;
        this._position = { x: 9, y: 9 };
        this._cellSize = 47; // La taille d'une cellule en pixel.
        this._speed = 10; // Nous voulons que 1 cellule (de notre grille) soit parcourue en 1 seconde (doit être dépendant des FPS fixés car la fonction est appelée à chaque frame). Notre unité de vitesse est donc "le nombre de cellules de la grille parcourues/seconde".
        this._direction = 1; // En radian.
        this._timer = 0;
        this._block = true;
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

    bindDisplayAnt(callback) {
        this.displayAnt = callback;
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

    // Fonction qui arrete le temps
    resetTime() {
        location.reload(); //debug purpose
        clearInterval(this.counter);
        this._block = false;

    }

    
    // Fonction qui lance le temps et démarrer la clock
    getTime() {
        this.time = "00:00";
        this.displayTime(this.time);
        this.resetTile();
        this.generate_ant();
        this.update();
        this._block = true;
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
        }, 10);
    }

    // Fonction qui vérifie si il reste de la nourriture
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
            this.resetTime();
        }
    }

    // Fonction qui décrémente les pheromones de toutes les cases
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

    // Fonction qui génère les fourmis
    generate_ant() {
        this.ant1 = new Ant();
        this.fourmis.push(this.ant1);
        this.ant1.trajet_route();
    }

    // Fonction qui déplace la fourmi
    move(durationFrame) {
        /*
            Calculer le vecteur direction:
            https://reglecompas.fr/wp-content/uploads/2020/10/coord-trigo.png
        */
        //let dx = Math.cos(this._direction); // cos(0) = 1 ; cos(pi) = -1 ; cos(pi/2) = 0.
        // let dy = Math.sin(this._direction) * -1; // sin(0) = 0 ; sin(pi) = 0 ; sin(pi/2) = 1 ; -1 car canvas inverse l'axe Y.

        const nextDirection = this.ant1.next_etape(this.grid);
        if (nextDirection !== null) {
            const { dx, dy } = nextDirection;
            // Utilisez dx et dy comme vous le souhaitez
            console.log(`Prochaine direction : dx = ${dx}, dy = ${dy}`);
            /* Multiplier la direction par la vitesse */
            //this.ant1.position.x += dx * this._speed / this._fps; // On divise par les fps car la fonction est appelée selon un fps donné (#cellGrid/seconde).
            //this.ant1.position.y += dy * this._speed / this._fps;
            console.log("Next case : " + this.ant1.position.x + dx)
            this.ant1.position.x += dx * this._speed / this._fps;
            this.ant1.position.y += dy * this._speed / this._fps;
            //this.ant1.position.x += dx; 
            // this.ant1.position.y += dy; 
            this.ant1.trajet_route()

            // Vous pouvez utiliser ces valeurs pour animer le déplacement de la fourmi, par exemple.
        } else {
            // Aucune direction valide trouvée
            console.log("Aucune direction valide trouvée");
        }



    }


    update() {
        /* Calcul du deltaTime */

        let currentTime = Date.now();
        let deltaTime = currentTime - this._startTime; // La durée entre deux appels (entre 2 frames).
        this._lag += deltaTime;
        this._startTime = currentTime;
        this._timer += deltaTime;

        /* Mettre à jour la logique si la variable _lag est supérieure ou égale à la durée d'une frame */
        console.log("_lag + _frameDuration" + this._lag + " " + this._frameDuration)
        while (this._lag >= this._frameDuration) {

            /* Mise à jour de la logique et de la vue */
            this.move(this._frameDuration);
            this.display(this.grid);
            this.displayAnt(this.ant1.position);
            this.checkNourriture();
            this.decrementAllPheromone();
            /* Réduire la variable _lag par la durée d'une frame */
            this._lag -= this._frameDuration;
        }
        console.log("check_pos : " + JSON.stringify(this.ant1.position.x))

        if (this._block == true) {
            console.log("ici");
            requestAnimationFrame(this.update.bind(this)); // La fonction de rappel est généralement appelée 60 fois par seconde.
            if (this.ant1.trajet.length >= 10) {
                const lastTenPositions = this.ant1.trajet.slice(-10);
                if (lastTenPositions.every(pos => pos.x === lastTenPositions[0].x && pos.y === lastTenPositions[0].y)) {
                    console.log("Les 10 dernières positions sont identiques. Arrêt du processus.");
                    this._block = false;
                }
            }
        }
        console.log(this.ant1.position, this._timer / 1000);
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
                        
                        let proportional = Math.log10(tile.pheromone * (10 - 1) + 1) * ((this.cellSize - 5) / 2);

                        if (this.statusPheromone) {
                            this.ctx.font = "bold 14px Arial";
                            this.ctx.fillStyle = this.colorChooser(proportional);
                            this.ctx.fillText(tile.pheromone.toFixed(2), j * this.cellSize + 15, i * this.cellSize + this.cellSize / 2 + 6);
                        } else {
                            if(tile.pheromone > 0) {
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

    displayAnt(position) {
        this.ctx.drawImage(ANT_IMAGE, position.x * this.cellSize, position.y * this.cellSize, this.cellSize / 2, this.cellSize / 2);
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

        this.bindDisplayAnt = this.bindDisplayAnt.bind(this);
        this.model.bindDisplayAnt(this.bindDisplayAnt);

        this.model.bindDisplay(this.bindDisplay.bind(this))
        this.model.play()
    }

    bindDisplay(grid) {
        this.view.display(grid)
    }

    bindDisplayAnt(position) {
        this.view.displayAnt(position)
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