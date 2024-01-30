class Ant {
    constructor() {
        this.speed = 1; 
        this.position = { x: 9, y: 9 };
        this.direction = { dx: 0, dy: 1 };
        this.next_case = 0;
        this.trajet = [];
        this.target = this.position;
    }

    trajet_route() {

        console.log("Current pos  : " + JSON.stringify(this.position))
        this.trajet.push({ ...this.position });
        console.log("Trajet " + JSON.stringify(this.trajet));
    }

    next_etape(grid) {
        
       // if (this.trajet.length > 1) {
            //this.previousPosition = this.trajet[this.trajet.length - 1];
       // }
        //else {
        //    this.previousPosition = this.trajet[this.trajet.length];    
        //}

        let previousPosition = this.trajet[this.trajet.length - 1];
        console.log("Trajet :: " + this.trajet[this.trajet.lenght - 1]); 
        console.log("before if")
        console.log("target : " + JSON.stringify(this.target) + " position : " + JSON.stringify(previousPosition));
        if (this.target.x == previousPosition.x && this.target.y == previousPosition.y) {
            console.log("in if");
            let previousTile = grid[previousPosition.y][previousPosition.x];
            
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
                    console.log("dir : " + JSON.stringify(dir) );
                    this.trajet.push({ ...this.direction });
                    console.log("Trajet " + JSON.stringify(this.trajet));
                    this.direction = dir;
                    return this.direction;
                }
            }

            // Enregistrez la case précédente

            // Mélangez les directions de manière aléatoire
            // const shuffledDirections = directions.sort(() => Math.random() - 0.5);

            // for (const dir of shuffledDirections) {
            //     const nextX = Math.floor(this.position.x + dir.dx);
            //     const nextY = Math.floor(this.position.y + dir.dy);

            //     // Vérifier si la prochaine case est à l'intérieur de la matrice
            //     if (nextX >= 0 && nextX < grid.length && nextY >= 0 && nextY < grid[0].length) {
            //         // Vérifier si la case est accessible et différente de la case précédente
            //         if ((grid[nextY][nextX].type === "herbe" || grid[nextY][nextX].type === "nourriture") && (nextX !== previousPosition.x || nextY !== previousPosition.y)) {

            //             console.log("Next grid : " + JSON.stringify(grid[nextY][nextX]));
            //             // Enregistrez la nouvelle case comme la case précédente

            //             previousPosition.x = Math.floor(this.position.x);
            //             previousPosition.y = Math.floor(this.position.y);
            //             this.target = { x: nextX, y: nextY };
            //             // Retourner la direction de la prochaine case valide
            //             this.direction = dir;
            //             return dir;
            //         }
            //     }
            // }
        } else {
            console.log("in else");
            
            //return this.direction;
            
            const nextX = Math.floor(this.position.x + this.direction.dx);
            const nextY = Math.floor(this.position.y + this.direction.dy);

            if (nextX >= 0 && nextX < grid.length && nextY >= 0 && nextY < grid[0].length) {
                if (grid[nextY][nextX].type === "herbe" || grid[nextY][nextX].type === "nourriture") {
                    return this.direction;
                }
            }
        }
        // Aucune direction valide trouvée
    }
}