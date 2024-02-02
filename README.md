# AntAlgorithme

## Description

L'objectif de ce projet est de simuler un algorithme de fourmis.
Il a été réalisé dans le cadre de l'initation au developpement WEB par Victor BLAAS et Kénan MEYLAN.
Il peut etre lancer depuis un serveur web ou directement dans un navigateur a votre convenance.

## ToDoList

- [x] Create canvas
- [x] Bind time and pheromone button
- [x] Create clock
- [x] Create ant
- [x] Implement ant algorithm


## Algorithme des fourmis

### Exploration

1) On crée une pile vide pour les position
2) On récupere la position initiale de la fourmi et on empile
3) On récupere la valeur des phéromones sur les cases directement voisines
4) On calcule la probabilité de chaque case : 
   - `Proba = (gamma + pheromone) / ((nombre de pheromone * gamma) + somme des phéromones)`
   - `gamma` est un paramètre pour favoriser l'exploration ( si pheromone = 0, on a quand meme une probabilité non nulle)
5) On tire un nombre alétaoire entre 0 et 1
6) On regarde si la probabilité d'une case est supérieur au nombre aléatoire
7) Si oui, on déplace la fourmi sur la case et on empile la position
8) Si non, on additione la probabilité de la case suivante 
9) Si la somme des probabilités est supérieur au nombre aléatoire, on déplace la fourmi sur la case et on empile la position
10) Si non, on continue a l'étape 8
11) Lorsque la case voisine d'une fourmi est une case nourriture, on passe a l'étape de retour

### Retour

1) On dépose une quantité de phréromone sur la case : 
    - `Quantité = omega / distance`
    - `omega` est un parametre de réglage a définir
    - La distance étant la taille de la pile - 1 (la case de départ n'est pas compté)
2) On dépile la position
3) On déplace la fourmi sur la case
4) On recommence a l'étape 1 jusqu'a ce que la pile soit vide
5) On ne dépose pas de phéromone sur la case de départ
6) On recommence a l'étape d'exploration