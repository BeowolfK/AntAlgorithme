// Initialisation des images
const HEXTILES_IMAGE = new Image();
HEXTILES_IMAGE.src = 'assets/foodAndColony.png';

const TREE_IMAGE = new Image();
TREE_IMAGE.src = 'assets/tree.png';

const ANT_IMAGE = new Image();
ANT_IMAGE.src = 'assets/ant.png';

const ANT_TOP_IMAGE = new Image();
ANT_TOP_IMAGE.src = 'assets/ant_top.png';

const ANT_BOT_IMAGE = new Image();
ANT_BOT_IMAGE.src = 'assets/ant_bot.png';

const ANT_RIGHT_IMAGE = new Image();
ANT_RIGHT_IMAGE.src = 'assets/ant_right.png';

const GRASS_IMAGE = new Image();
GRASS_IMAGE.src = 'assets/grass.png';

const SHADOW_IMAGE = new Image();
SHADOW_IMAGE.src = 'assets/shadow.png';

Promise.all([
    new Promise((resolve) => {
        HEXTILES_IMAGE.addEventListener('load', () => { resolve(); });
    }), new Promise((resolve) => {
        TREE_IMAGE.addEventListener('load', () => { resolve(); });
    }), new Promise((resolve) => {
        ANT_IMAGE.addEventListener('load', () => { resolve(); });
    }), new Promise((resolve) => {
        GRASS_IMAGE.addEventListener('load', () => { resolve(); });
    }), new Promise((resolve) => {
        SHADOW_IMAGE.addEventListener('load', () => { resolve(); });
    })]).then(() => {
    const app = new Controller(new Model(), new View())
});