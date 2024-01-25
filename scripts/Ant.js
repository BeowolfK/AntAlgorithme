class Ant {
    constructor() {
        this.speed = 1; 
        this.position = { x: 9, y: 9 };
        this.direction = 1;
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
        console.log("target : " + JSON.stringify(this.target) + " position : " + JSON.stringify(this.position));

        const previousPosition = { x: Math.floor(this.position.x), y: Math.floor(this.position.y) };

        if (this.target.x == previousPosition.x && this.target.y == previousPosition.y) {
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
                        proba += grid[nextY][nextX].pheromone;
                    }
                }
            }
            let i = 0;
            for(let dir of directions) {
                const nextX = Math.floor(this.position.x + dir.dx);
                const nextY = Math.floor(this.position.y + dir.dy);

                if (nextX >= 0 && nextX < grid.length && nextY >= 0 && nextY < grid[0].length) {
                    if (grid[nextY][nextX].type === "herbe") {
                        const probaDir = ( gamma + grid[nextY][nextX].pheromone ) / (( 4 * gamma ) + proba);
                        directions[i].proba = probaDir;
                    }
                }
            }

            // Enregistrez la case précédente

            // Mélangez les directions de manière aléatoire
            const shuffledDirections = directions.sort(() => Math.random() - 0.5);

            for (const dir of shuffledDirections) {
                const nextX = Math.floor(this.position.x + dir.dx);
                const nextY = Math.floor(this.position.y + dir.dy);

                // Vérifier si la prochaine case est à l'intérieur de la matrice
                if (nextX >= 0 && nextX < grid.length && nextY >= 0 && nextY < grid[0].length) {
                    // Vérifier si la case est accessible et différente de la case précédente
                    if ((grid[nextY][nextX].type === "herbe" || grid[nextY][nextX].type === "nourriture") && (nextX !== previousPosition.x || nextY !== previousPosition.y)) {

                        console.log("Next grid : " + JSON.stringify(grid[nextY][nextX]));
                        // Enregistrez la nouvelle case comme la case précédente

                        previousPosition.x = Math.floor(this.position.x);
                        previousPosition.y = Math.floor(this.position.y);
                        this.target = { x: nextX, y: nextY };
                        // Retourner la direction de la prochaine case valide
                        this.direction = dir;
                        return dir;
                    }
                }
            }
        }
        else {
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