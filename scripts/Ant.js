class Ant {
    constructor() {
        this.speed = 1 ; 
        this.possiblePositions = [
            { x: 9, y: 10 },
            { x: 8, y: 9 },
            { x: 10, y: 9 },
            { x: 9, y: 8 }
        ];
        this.position = this.getRandomPosition();
        this.direction = 1; 
        this.next_case = 0; 
        this.trajet = [];
        this.target = this.position;
    }


    getRandomPosition() {
        // Générer un index aléatoire
        const randomIndex = Math.floor(Math.random() * this.possiblePositions.length);
        // Retourner la position correspondante à l'index
        return this.possiblePositions[randomIndex];
    }
    
    trajet_route() {           
       
        console.log("Current pos  : " + JSON.stringify(this.position))
        this.trajet.push({...this.position});
        console.log("Trajet " + JSON.stringify(this.trajet));
    }

    next_etape(grid) {
        console.log("target : " + JSON.stringify(this.target) + " position : " + JSON.stringify(this.position));
    
        
        if (this.target.x == Math.floor(this.position.x) && this.target.y == Math.floor(this.position.y)) {
        const directions = [
            { dx: 0, dy: -1 }, // Haut
            { dx: 0, dy: 1 },  // Bas
            { dx: 1, dy: 0 },  // Droite
            { dx: -1, dy: 0 }  // Gauche
        ];
    
        // Enregistrez la case précédente
        const previousPosition = { x: this.position.x, y: this.position.y };
    
        // Mélangez les directions de manière aléatoire
        const shuffledDirections = directions.sort(() => Math.random() - 0.5);
        
            for (const dir of shuffledDirections) {
                const nextX = Math.floor(this.position.x + dir.dx);
                const nextY = Math.floor(this.position.y + dir.dy);
        
                // Vérifier si la prochaine case est à l'intérieur de la matrice
                if (nextX >= 0 && nextX < grid.length && nextY >= 0 && nextY < grid[0].length) {
                    // Vérifier si la case est accessible et différente de la case précédente
                    
                //  if (grid[nextX][nextY].type !== "arbre" && grid[nextX][nextY].type !== "colonie" && (nextX !== previousPosition.x || nextY !== previousPosition.y)) {
                    if ((grid[nextY][nextX] instanceof Herbe || grid[nextY][nextX] instanceof Nourriture) && (nextX !== previousPosition.x || nextY !== previousPosition.y)) {
                    
                        console.log("Next grid : " +  JSON.stringify(grid[nextY][nextX]));
                        // Enregistrez la nouvelle case comme la case précédente
                        
                        previousPosition.x = Math.floor(this.position.x);
                        previousPosition.y = Math.floor(this.position.y);
                        this.target = {x: nextX, y : nextY}; 
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
                if (grid[nextY][nextX] instanceof Herbe || grid[nextY][nextX] instanceof Nourriture) {

                    return this.direction; 
                }

            }

        }
        // Aucune direction valide trouvée
    }

}                                                                                                                                                                                                                            