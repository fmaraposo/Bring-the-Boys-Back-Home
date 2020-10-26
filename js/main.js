//Get Canvas
let currentGame;
let currentCharacter;
let gravity = 0.6;
let userPull = 0;
let animationFrameId;

// Accessando o canvas através do DOM como objecto de JS.
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
document.getElementById('game-board').style.display = 'none';

document.getElementById('start-button').onclick = () => {
    startGame();
};


document.onkeydown = function(e) {
    if(e.keyCode == 32) {
        userPull = 0.8;
    } else {
        let whereToGo = e.keyCode;
        currentGame.character.move(whereToGo);
    }
};

document.onkeyup = function(e) {
    if(e.keyCode == 32) {
        userPull = 0;
    }
};

let canvasBackground = new Background (canvas, ctx);

function updateCanvas() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    canvasBackground.draw();
    currentGame.character.drawCharacter();
    currentGame.character.vy = currentGame.character.vy + (gravity - userPull);
    currentGame.character.y += currentGame.character.vy;
    currentGame.character.hitBottom();
    //We declare animationFrameId so to cancel the Request Animation Frame in the Request Start Game Function.
    animationFrameId = requestAnimationFrame(updateCanvas);
}

function startGame () {
    //To fix the bug, of increasing the speed of the backgroud while clicking on Start Game. It was increasing the frames per second of the requestAnimationFrame.
    cancelAnimationFrame(animationFrameId);
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


