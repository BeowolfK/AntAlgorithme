class Model {
    constructor() {
        // 0 = arbre, 1 = herbe, 2 = nourriture, 3 = colonie
        this.grid = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1 ,1, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 2, 0],
            [0, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
            [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
            [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0 ,0 ,0 ,0],
            [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0 ,0 ,0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 0, 0, 1, 0, 0 ,0 ,0],
            [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
            [0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
            [0, 1, 0, 1, 0 ,1, 0, 0, 1, 0, 1, 0, 1, 1, 2, 1, 1, 0],
            [0, 1, 1, 1, 0, 2, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        this.time = "00:05";
    }

    bindDisplay(callback) {
        this.display = callback;
    }

    play() {
        this.display(this.grid);
    }

    bindDisplayTime(callback) {
        this.displayTime = callback;
    }

    getTime() {
        this.displayTime(this.time);
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
    
    display(grid){
        let pheromone = 0.001;
        let nbLines = grid.length;
        let nbColumns = grid[0].length;
        this.canvas.width = nbColumns * this.cellSize;
        this.canvas.height = nbLines * this.cellSize;
        this.ctx.fillStyle = "#72751b";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                let tile = grid[i][j];
                if (tile === 1) {
                    let randX = Math.floor(Math.random() * 8);
                    let randY = Math.floor(Math.random() * 4);
                    this.ctx.drawImage(GRASS_IMAGE, randX * 16, randY * 16, 32, 32, j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize);

                    if (this.statusPheromone) {
                        this.ctx.font = "12px Arial";
                        this.ctx.fillStyle = "white";
                        this.ctx.fillText(pheromone.toFixed(2), j * this.cellSize + 15, i * this.cellSize + this.cellSize / 2  + 6);
                    } else {
                        let radius = 1 + Math.log10(pheromone * (10 - 1) + 1) * ((this.cellSize - 5) / 2) ;
                        console.log(radius);

                        this.ctx.beginPath();
                        this.ctx.arc(j * this.cellSize + this.cellSize / 2, i * this.cellSize + this.cellSize / 2, radius, 0, 2 * Math.PI);
                        this.ctx.fillStyle = "#ffffff";

                        this.ctx.fill();
                        this.ctx.closePath();
                    } 
                } else if (tile === 0) {
                    this.ctx.drawImage(SHADOW_IMAGE, 0, 32, 128, 128, j * this.cellSize, i * this.cellSize + 10, this.cellSize, this.cellSize);
                    this.ctx.drawImage(TREE_IMAGE, 0, 0, 128, 128, j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize);
                } else if (tile === 2) {
                    this.ctx.drawImage(HEXTILES_IMAGE, 0 * 32, 14 * 32, 32, 32, j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize);
                } else if (tile === 3) {
                    this.ctx.drawImage(HEXTILES_IMAGE, 1 * 32, 20 * 32, 32, 32, j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize);
                }
            }
        }
    }

    bindGetTime(callback) {
        this.getTime = callback;
    }

    displayTime(time) {
        let clock = document.getElementById('clock');
        clock.innerHTML = time;
    }

    toggleClock() {
        let clock = document.getElementById('clock');
        let statusB = document.getElementById('toggle-time');
        statusB.addEventListener('click', () => {
            if (this.statusTime) {
                this.statusTime = false;
                statusB.innerHTML = "Start";
                clock.innerHTML = "00:00";
            } else {
                this.statusTime = true;
                statusB.innerHTML = "Stop";
                clock.innerHTML = this.getTime();
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
        this.model.play()

        this.bindDisplayTime = this.bindDisplayTime.bind(this);
        this.model.bindDisplayTime(this.bindDisplayTime);

        this.bindGetTime = this.bindGetTime.bind(this);
        this.view.bindGetTime(this.bindGetTime);

    }

    bindDisplay(grid) {
        this.view.display(grid)
    }

    bindDisplayTime(time) {
        this.view.displayTime(time);
    }

    bindGetTime() {
            this.model.getTime();
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