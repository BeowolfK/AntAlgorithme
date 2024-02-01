class Ant {
    constructor() {
        this.speed = 1;
        this.position = { x: 9, y: 9 };
        this.direction = { dx: 0, dy: 1 };
        this.next_case = 0;
        this.trajet = [];
        this.trajetTotalLenght = 0;
        // this.trajetDirection = [{ dx: -1, dy: 0}];
        this.target = { x: 9, y: 9 };
        this.speed = 10
        this.return = false;
    }

    next_etape(grid) {
        if (this.target.x == Math.floor(this.position.x) && this.target.y == Math.floor(this.position.y)) {
            // console.log(JSON.stringify(this.trajet));
            let tile = grid[Math.floor(this.position.y)][Math.floor(this.position.x)];

            if (tile.type === "nourriture" && tile.etat > 0) {
                tile.decrementEtat();
                this.return = true;
                this.trajetTotalLenght = this.trajet.length;
                // this.trajetDirection = [{ dx: -1, dy: 0}];
            }

            if (this.trajet.length === 0 && this.return) {
                this.return = false;
            }

            if (this.return && this.trajet.length > 0) {
                this.target = this.trajet.pop();
                // console.log("trajet : " + JSON.stringify(this.trajet));
                // debugger;
                // this.direction = this.trajetDirection.pop();
                // console.log(this.trajet.length, this.trajetDirection.length);
                // this.direction.dx *= -1;
                // this.direction.dy *= -1;
                // this.direction = {dx : -1, dy : 0};
                // console.log("direction : " + JSON.stringify(this.direction));
                // console.log("-----------------------------")
                // console.log(this.trajet.length);
                // console.log("target : " + JSON.stringify(this.target));
                // console.log(this.target.x, this.target.y);
                let targetTile = grid[Math.floor(this.target.y)][Math.floor(this.target.x)];
                // console.log("targetTile : " + JSON.stringify(targetTile));
                if (targetTile.type === "herbe") {
                    targetTile.incrementPheromone(1 / this.trajetTotalLenght);
                }
                // console.log("target : " + JSON.stringify(this.target));
                return this.target;
                
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
                    let tile = grid[nextY][nextX];
                    if (tile.type === "herbe") {
                        proba.push(tile.pheromone);
                    } else if (tile.type === "nourriture" && tile.etat > 0) {
                        this.target.x = nextX
                        this.target.y = nextY
                        this.trajet.push({ ...this.target });
                        return this.target;
                    } else if (tile.type === "colonie") {
                        this.target.x = nextX
                        this.target.y = nextY
                        this.trajet = [{x: nextX, y: nextY}]
                    }
                }
            }

            // console.log(this.position.x + " " + this.position.y);
            // console.log( JSON.stringify(proba));


            let i = 0;
            for (let dir of directions) {
                const nextX = Math.floor(this.position.x + dir.dx);
                const nextY = Math.floor(this.position.y + dir.dy);

                if (nextX >= 0 && nextX < grid[0].length && nextY >= 0 && nextY < grid.length) {
                    
                    if (grid[nextY][nextX].type === "herbe") {
                        let probaDir = (gamma + grid[nextY][nextX].pheromone) / ((proba.length * gamma) + (proba.reduce((total, num) => total + num, 0)));

                        directions[i].proba = probaDir;
                        // // console.log("probaDir : " + JSON.stringify(directions[i]));
                    }
                    i++;
                }
            }

            // console.log(JSON.stringify(directions));

            let random = Math.random();

            

            let sum = 0;
            for (let dir of directions) {
                if (dir.proba === undefined) {
                    continue;
                }
                sum += dir.proba;
                let maybeX = Math.floor(this.position.x + dir.dx);
                let maybeY = Math.floor(this.position.y + dir.dy);
                if (this.trajet.length > 0) {
                    if (maybeX === this.trajet[this.trajet.length - 1].x && maybeY === this.trajet[this.trajet.length - 1].y) {
                        continue;
                    }
                }
                if (random <= sum) {
                    this.target.x = maybeX;
                    this.target.y = maybeY;
                    this.trajet.push({ ...this.target });
                    // this.trajetDirection.push({ ...dir });
                    
                    // console.log("target : " + JSON.stringify(this.target));
                    // debugger;
                    this.direction = dir;
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
        
        // console.log("nextDirection : " + JSON.stringify(nextDirection));
        // console.log(this.trajet.length);

        if (Object.keys(nextDirection).length !== 0) {
            const { x, y } = nextDirection;
            // // console.log(`Prochaine direction : dx = ${x}, dy = ${y}`);

            let direction = Math.atan2(this.position.y - (y + 0.5), (x + 0.5) - this.position.x);
            // // console.log("direction : " + direction);
            let destX = Math.cos(direction);
            let destY = Math.sin(direction) * -1;
            // // console.log("destX : " + destX + " destY : " + destY);

            this.position.x += destX * this.speed / fps;
            this.position.y += destY * this.speed / fps;

            //     /* Multiplier la direction par la vitesse */
            //     //this.ant1.position.x += dx * this._speed / this._fps; // On divise par les fps car la fonction est appelée selon un fps donné (#cellGrid/seconde).
            //     //this.ant1.position.y += dy * this._speed / this._fps;
            //     // console.log("Next case : " + this.ant1.position.x + dx)
            //     this.ant1.position.x += dx * this._speed / this._fps;
            //     this.ant1.position.y += dy * this._speed / this._fps;
            //     //this.ant1.position.x += dx; 
            //     // this.ant1.position.y += dy; 

            //     // Vous pouvez utiliser ces valeurs pour animer le déplacement de la fourmi, par exemple.
            // } else {
            //     // Aucune direction valide trouvée
            //     // console.log("Aucune direction valide trouvée");
        }
    }
}