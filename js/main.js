//Get Canvas
let currentGame;
let currentCharacter;
// Accessando o canvas através do DOM como objecto de JS.
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
document.getElementById('game-board').style.display = 'none';

document.getElementById('start-button').onclick = () => {
    startGame();
};

let canvasBackground = new Background (canvas, ctx);

function updateCanvas() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    canvasBackground.draw();
    currentGame.character.drawCharacter();
    requestAnimationFrame(updateCanvas);
}

function startGame () {
    document.getElementById('game-intro').style.display = 'none';
    document.getElementById('game-board').style.display = 'block';
    //Instantiate a new game
    currentGame = new Game ();
    //Instantiate a new monkey
    currentCharacter = new Character ();
    currentGame.character = currentCharacter;
    currentGame.character.drawCharacter();
    //Refersh the all Canvas
    updateCanvas();
}


