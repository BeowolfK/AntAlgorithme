class Ant {
    constructor() {
        this.speed = 1; 
        this.position = { x: 9, y: 9 };
        this.direction = { dx: 0, dy: 1};
        this.next_case = 0;
        this.trajet = [];
        this.target = { x: 9, y: 9 };
    }

    trajet_route() {

        console.log("Current pos  : " + JSON.stringify(this.position))
        this.trajet.push({ ...this.position });
        console.log("Trajet " + JSON.stringify(this.trajet));
    }

    next_etape(grid) {
        // let previousPosition = this.trajet[this.trajet.length - 1];
        // console.log("Trajet :: " + this.trajet[this.trajet.lenght - 1]); 
        console.log("before if")
        if (this.target.x == Math.floor(this.position.x) && this.target.y == Math.floor(this.position.y) ) {
            console.log("in if");
            let previousTile = grid[Math.floor(this.position.y)][ Math.floor(this.position.x)];
            
            if(previousTile.type === "nourriture" && previousTile.etat > 0) {
                previousTile.decrementEtat();
            }

            const directions = [
                { dx: 0, dy: -1 }, // Haut
                { dx: 0, dy: 1 },  // Bas
                { dx: 1, dy: 0 },  // Droite
                { dx: -1, dy: 0 }  // Gauche
            ];

            let proba = [];
            const gamma = 1; // Coefficient de pondération
            for(let dir of directions) {
                const nextX = Math.floor(this.position.x + dir.dx);
                const nextY = Math.floor(this.position.y + dir.dy);

                if (nextX >= 0 && nextX < grid.length && nextY >= 0 && nextY < grid[0].length) {
                    if (grid[nextY][nextX].type === "herbe") {
                        proba.push(grid[nextY][nextX].pheromone);
                    }
                }
            }
            let i = 0;
            for(let dir of directions) {
                const nextX = Math.floor(this.position.x + dir.dx);
                const nextY = Math.floor(this.position.y + dir.dy);

                if (nextX >= 0 && nextX < grid.length && nextY >= 0 && nextY < grid[0].length) {
                    if (grid[nextY][nextX].type === "herbe") {
                        let probaDir = ( gamma + grid[nextY][nextX].pheromone ) / (( proba.length * gamma ) + (proba.reduce((total, num) => total + num, 0)));

                        directions[i].proba = probaDir;
                        console.log("probaDir : " + JSON.stringify(directions[i]));
                        i++;
                    }
                }
            }

            let random = Math.random();
            let sum = 0;
            for(let dir of directions) {
                sum += dir.proba;
                if (random <= sum) {
                    this.target.x = this.position.x + dir.dx;
                    this.target.y = this.position.y + dir.dy;
                    this.trajet.push({ ...this.target });
                    console.log("target : " + JSON.stringify(this.target));
                    return this.target;
                }
            }
        } else {
            console.log("in else");
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
}