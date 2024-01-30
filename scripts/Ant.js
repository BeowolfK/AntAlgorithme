class Ant {
    constructor() {
        this.speed = 1;
        this.position = { x: 2.5, y: 1.5 };
        this.direction = { dx: 0, dy: 1 };
        this.next_case = 0;
        this.trajet = [];
        this.target = { x: 1, y: 1 };
        this.speed = 1
    }

    trajet_route() {

        // console.log("Current pos  : " + JSON.stringify(this.position))
        this.trajet.push({ ...this.position });
        // console.log("Trajet " + JSON.stringify(this.trajet));
    }

    next_etape(grid) {
        // let previousPosition = this.trajet[this.trajet.length - 1];
        // console.log("Trajet :: " + this.trajet[this.trajet.lenght - 1]); 
        // console.log("before if")
        if (this.target.x == Math.floor(this.position.x) && this.target.y == Math.floor(this.position.y)) {
            // console.log("in if");
            let tile = grid[Math.floor(this.position.y)][Math.floor(this.position.x)];

            if (tile.type === "nourriture" && tile.etat > 0) {
                tile.decrementEtat();
            }

            const directions = [
                { dx: 0, dy: -1 }, // Haut
                { dx: 0, dy: 1 },  // Bas
                { dx: 1, dy: 0 },  // Droite
                { dx: -1, dy: 0 }  // Gauche
            ];

            let proba = [];
            const gamma = 1; // Coefficient de pondération
            for (let dir of directions) {
                const nextX = Math.floor(this.position.x + dir.dx);
                const nextY = Math.floor(this.position.y + dir.dy);

                if (nextX >= 0 && nextX < grid[0].length && nextY >= 0 && nextY < grid.length) {
                    if (grid[nextY][nextX].type === "herbe") {
                        proba.push(grid[nextY][nextX].pheromone);
                        // console.log("nextX : " + nextX + " nextY : " + nextY);
                        // console.log("type : " + grid[nextY][nextX].type);
                        // console.log("proba : " + proba);
                        // console.log("pheromone : " + grid[nextY][nextX].pheromone);
                    }
                }
            }

            console.log(this.position.x + " " + this.position.y);
            console.log( JSON.stringify(proba));


            let i = 0;
            for (let dir of directions) {
                const nextX = Math.floor(this.position.x + dir.dx);
                const nextY = Math.floor(this.position.y + dir.dy);

                if (nextX >= 0 && nextX < grid[0].length && nextY >= 0 && nextY < grid.length) {
                    
                    if (grid[nextY][nextX].type === "herbe") {
                        let probaDir = (gamma + grid[nextY][nextX].pheromone) / ((proba.length * gamma) + (proba.reduce((total, num) => total + num, 0)));

                        directions[i].proba = probaDir;
                        // console.log("probaDir : " + JSON.stringify(directions[i]));
                    }
                    i++;
                }
            }

            console.log(JSON.stringify(directions));

            let random = Math.random();

            

            let sum = 0;
            for (let dir of directions) {
                if (dir.proba === undefined) {
                    continue;
                }
                sum += dir.proba;
                console.log("random : " + random, "sum : " + sum);
                if (random <= sum) {
                    this.target.x = Math.floor(this.position.x + dir.dx);
                    this.target.y = Math.floor(this.position.y + dir.dy);
                    this.trajet.push({ ...this.target });
                    
                    console.log("target : " + JSON.stringify(this.target));
                    // debugger;
                    return this.target;
                }
            }
        } else {
            // console.log("in else");
            return this.target;

            // const nextX = Math.floor(this.position.x + this.direction.dx);
            // const nextY = Math.floor(this.position.y + this.direction.dy);

            // if (nextX >= 0 && nextX < grid.length && nextY >= 0 && nextY < grid[0].length) {
            //     if (grid[nextY][nextX].type === "herbe" || grid[nextY][nextX].type === "nourriture") {
            //     }
            // }
        }
        // Aucune direction valide trouvée
    }

    // Fonction qui déplace la fourmi
    move(grid, fps) {
        // debugger;
        const nextDirection = this.next_etape(grid);
        
        console.log("nextDirection : " + JSON.stringify(nextDirection));    
        if (Object.keys(nextDirection).length !== 0) {
            const { x, y } = nextDirection;
            // console.log(`Prochaine direction : dx = ${x}, dy = ${y}`);

            let direction = Math.atan2(this.position.y - (y + 0.5), (x + 0.5) - this.position.x);
            // console.log("direction : " + direction);
            let destX = Math.cos(direction);
            let destY = Math.sin(direction) * -1;
            // console.log("destX : " + destX + " destY : " + destY);

            this.position.x += destX * this.speed / fps;
            this.position.y += destY * this.speed / fps;

            //     /* Multiplier la direction par la vitesse */
            //     //this.ant1.position.x += dx * this._speed / this._fps; // On divise par les fps car la fonction est appelée selon un fps donné (#cellGrid/seconde).
            //     //this.ant1.position.y += dy * this._speed / this._fps;
            //     console.log("Next case : " + this.ant1.position.x + dx)
            //     this.ant1.position.x += dx * this._speed / this._fps;
            //     this.ant1.position.y += dy * this._speed / this._fps;
            //     //this.ant1.position.x += dx; 
            //     // this.ant1.position.y += dy; 

            //     // Vous pouvez utiliser ces valeurs pour animer le déplacement de la fourmi, par exemple.
            // } else {
            //     // Aucune direction valide trouvée
            //     console.log("Aucune direction valide trouvée");
        }
    }
}