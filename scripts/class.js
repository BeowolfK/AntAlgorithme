// classe Arbre pour renvoyer un type d'objet
class Arbre {
    constructor() {
        this.type = "arbre";
    }
}

// classe Colonie pour renvoyer un type d'objet
class Colonie {
    constructor() {
        this.type = "colonie";
    }
}

// classe Herbe pour le type et les pheromones
class Herbe {
    constructor() {
        this.type = "herbe";
        this.pheromone = 0;
    }

    incrementPheromone(quota) {
        this.pheromone += 10 * quota;
    }

    decrementPheromone() {
        if (this.pheromone > 0) {
            this.pheromone -= this.pheromone / 1000;
        } else {
            this.pheromone = 0;
        }
    }
}

// classe Nourriture pour le type et l'état
class Nourriture {
    constructor() {
        this.type = "nourriture";
        this.etat = 100;
    }

    decrementEtat() {
        this.etat -= 5;
    }
}
