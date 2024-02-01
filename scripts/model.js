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
        this.antNumber = 1;
        this.fourmis = [];

        // Mouvement
        this._startTime = Date.now();
        this._lag = 0;
        this._fps = 60; // Frame rate.
        this._frameDuration = 1000 / this._fps;
        this._position = { x: 9, y: 9 };
        this._cellSize = 47; // La taille d'une cellule en pixel.
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

    // Bindings pour les fourmis
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
        clearInterval(this.counter);
        this._block = false;
        // location.reload(); //debug purpose   
    }


    // Fonction qui lance le temps et démarrer la clock
    getTime() {
        this.time = "00:00";
        this.displayTime(this.time);
        this.resetTile();
        this.generate_ant();
        this.update();
        if (!this._block) {
            location.reload();
        }
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
        // console.log("etat : " + qty_nourriture);
        if (qty_nourriture == 0) {
            // console.log("Plus de nourriture");
            clearInterval(this.counter);
            this._block = false;
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
        for (let i = 0; i < this.antNumber; i++) {
            let ant = new Ant();
            this.fourmis.push(ant);
        }
    }


    // Fonction qui fait tourner la clock de jeu
    update() {
        /* Calcul du deltaTime */
        let currentTime = Date.now();
        let deltaTime = currentTime - this._startTime; // La durée entre deux appels (entre 2 frames).
        this._lag += deltaTime;
        this._startTime = currentTime;
        this._timer += deltaTime;

        while (this._lag >= this._frameDuration) {

            /* Mise à jour de la logique et de la vue */
            this.checkNourriture();
            this.display(this.grid);
            for (let i = 0; i < this.fourmis.length; i++) {
                this.fourmis[i].move(this.grid, this._fps);
                this.displayAnt(this.fourmis[i]);
            }
            this.decrementAllPheromone();
            /* Réduire la variable _lag par la durée d'une frame */
            this._lag -= this._frameDuration;
        }

        if (this._block == true) {
            requestAnimationFrame(this.update.bind(this));
        }
    }
}
