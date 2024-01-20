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
    }


    getRandomPosition() {
        // Générer un index aléatoire
        const randomIndex = Math.floor(Math.random() * this.possiblePositions.length);
        // Retourner la position correspondante à l'index
        return this.possiblePositions[randomIndex];
    }
    
    trajet_route() {
        this.trajet.push(this.position);
        console.log("Trajet " + JSON.stringify(this.trajet));
    }

}                                                                                                                                                                                                                            