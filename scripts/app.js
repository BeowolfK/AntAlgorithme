        class Arbre {
    constructor() {
        this.type = "arbre";
    }
}

class Colonie {
    constructor() {
        this.type = "colonie";
    }
}

class Herbe {
    constructor() {
        this.type = "herbe";
        this.pheromone = 0.001;
    }

    incrementPheromone() {
        this.pheromone += 0.001;
    }

    decrementPheromone() {
        this.pheromone -= 0.001;
    }
}

class Nourriture {
    constructor() {
        this.type = "nourriture";
        this.etat = 100;
    }

    decrementEtat() {
        this.etat -= 1;
    }
}


class Model {
    constructor() {
        // 0 = arbre, 1 = herbe, 2 = nourriture, 3 = colonie
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
        this.time = "00:00";
        
        // Mouvement
        this._startTime     = Date.now();
        this._lag           = 0;
        this._fps           = 60; // Frame rate.
        this._frameDuration = 1000 / this._fps;
        this._position      = {x: 9, y:10};
        this._cellSize      = 100; // La taille d'une cellule en pixel.
        this._speed         = 10; // Nous voulons que 1 cellule (de notre grille) soit parcourue en 1 seconde (doit être dépendant des FPS fixés car la fonction est appelée à chaque frame). Notre unité de vitesse est donc "le nombre de cellules de la grille parcourues/seconde".
        this._direction     = 1; // En radian.
        this._timer         = 0;
        this._block         = true;  
    }

    bindDisplay(callback) {
        this.display = callback;
    }

    play() {
        
        this.generate_ant();

        this.display(this.grid, this.ant1.position);
        
        this.update();
        console.log('Final road : ' + JSON.stringify(this.ant1.trajet))
    }

    bindDisplayTime(callback) {
        this.displayTime = callback;
    }

    resetTime() {
        this.time = "00:00";
        this.displayTime(this.time);
    }

    getTime() {
        setInterval(() => { 
            let time = this.time.split(":");
            let minutes = parseInt(time[0]);
            let seconds = parseInt(time[1]);    

            seconds += 1;
            if (seconds == 60) {
                seconds = 0;
                minutes += 1;
            }

            this.time = minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
            this.displayTime(this.time);
        }, 1000);
    }

    generate_ant() {
        this.ant1 = new Ant();
        this.ant1.trajet_route(); 
      
        //this.ant1.next_etape(this.grid); 
    }

    move = function(durationFrame) {
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
            console.log("Next case : "+ this.ant1.position.x + dx )
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

    
    update = function() {
        /* Calcul du deltaTime */
        
        let currentTime = Date.now();
        let deltaTime   = currentTime - this._startTime; // La durée entre deux appels (entre 2 frames).
        this._lag += deltaTime;
        this._startTime = currentTime;
        this._timer += deltaTime;
        
        /* Mettre à jour la logique si la variable _lag est supérieure ou égale à la durée d'une frame */
        console.log("_lag + _frameDuration" + this._lag + " " + this._frameDuration)
        while (this._lag >= this._frameDuration) {
           
            /* Mise à jour de la logique et de la vue */
            
            this.move(this._frameDuration);
            this.display(this.grid,this.ant1.position);
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

class View {
    constructor() {
        this.canvas = document.getElementById('my_canvas');
        this.ctx = this.canvas.getContext('2d');

        this.cellSize = 47;
        this.statusTime = false;
        this.statusPheromone = false;
        this.toggleClock();
        this.togglePheromone();
    }
    
    display(grid, position){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        let nbLines = grid.length;
        let nbColumns = grid[0].length;
        this.canvas.width = nbColumns * this.cellSize;
        this.canvas.height = nbLines * this.cellSize;
        this.ctx.fillStyle = "#72751b";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                let tile = grid[i][j];
                switch (tile.type) {
                    case "herbe":
                        let randX = 4 + i % 4;
                        let randY = j % 4;
                        this.ctx.drawImage(GRASS_IMAGE, randX * 32, randY * 32, 32, 32, j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize);

                        if (this.statusPheromone) {
                            this.ctx.font = "12px Arial";
                            this.ctx.fillStyle = "white";
                            this.ctx.fillText(pheromone.toFixed(2), j * this.cellSize + 15, i * this.cellSize + this.cellSize / 2  + 6);
                        } else {
                            let radius = 1 + Math.log10(tile.pheromone * (10 - 1) + 1) * ((this.cellSize - 5) / 2) ;

                            this.ctx.beginPath();
                            this.ctx.arc(j * this.cellSize + this.cellSize / 2, i * this.cellSize + this.cellSize / 2, radius, 0, 2 * Math.PI);
                            this.ctx.fillStyle = "#ffffff";

                            this.ctx.fill();
                            this.ctx.closePath();
                        }
                        break;
                    case "arbre":
                        this.ctx.drawImage(SHADOW_IMAGE, 0, 32, 128, 128, j * this.cellSize, i * this.cellSize + 10, this.cellSize, this.cellSize);
                        this.ctx.drawImage(TREE_IMAGE, 0, 0, 128, 128, j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize);
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
        console.log("Print : " + position.x + " " + position.y)
        this.ctx.drawImage(ANT_IMAGE, position.x * this.cellSize , position.y * this.cellSize , this.cellSize /2 , this.cellSize /2 );
        // this.ctx.fillRect(position.x * this.cellSize, position.y * this.cellSize, 25, 25);
        console.log("pos 240 " + position.x + " " + position.y)
    }

    bindGetTime(callback) {
        this.getTime = callback;
    }

    bindResetTime(callback) {
        this.resetTime = callback;
    }

    displayTime(time) {
        console.log(time);
        let clock = document.getElementById('clock');
        clock.innerHTML = time;
    }

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

}

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        this.model.bindDisplay(this.bindDisplay.bind(this))
        
        this.bindDisplayTime = this.bindDisplayTime.bind(this);
        this.model.bindDisplayTime(this.bindDisplayTime);
        
        this.bindGetTime = this.bindGetTime.bind(this);
        this.view.bindGetTime(this.bindGetTime);

        this.bindResetTime = this.bindResetTime.bind(this);
        this.view.bindResetTime(this.bindResetTime);
        
        this.model.play()
    }

    bindDisplay(grid, position) {
        this.view.display(grid,position)
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