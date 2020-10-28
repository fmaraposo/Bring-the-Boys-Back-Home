let currentCharacter;
// let gravity = 0.6;
// let userPull = 0;
let animationFrameId;

// Accessando o canvas através do DOM como objecto de JS.
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
document.getElementById('game-board').style.display = 'none';

document.getElementById('start-button').onclick = () => {
    startGame();
};

document.onkeydown = (e) => {
    let whereToGo = e.keyCode;
    currentGame.character.move(whereToGo);
};


let canvasBackground = new Background (canvas, ctx);
let  currentGame = new Game ();  //Instantiate a new game

function startGame () {
    //currentGame.gameIsRunning = true
    cancelAnimationFrame(animationFrameId); // Fixing the bug of increasing the speed while clicking in start game.
    document.getElementById('game-intro').style.display = 'none';
    document.getElementById('game-board').style.display = 'block';
    //Instantiate a new monkey
    currentCharacter = new Character ();
    currentGame.character = currentCharacter;
    currentGame.character.drawCharacter();
    //Refersh the all Canvas
    updateCanvas();
}
function updateCanvas() {
    canvasBackground.move();
    ctx.clearRect(0,0, canvas.width, canvas.height);
    canvasBackground.draw();
    currentGame.character.drawCharacter();
    currentGame.obstacleFrequency();
    currentGame.paintObstacles();
    currentGame.obstacles.forEach(obstacle => {
        currentGame.detectCollision(obstacle);
    });
    //We declare animationFrameId so to cancel the Request Animation Frame in the Request Start Game Function.
    // if (currentGame.gameIsRunning) {
       //animationFrameId = requestAnimationFrame(updateCanvas 
    
    animationFrameId = requestAnimationFrame(updateCanvas);
}





















//FOR THE JUMP 

// document.onkeydown = function(e) {
//     if(e.keyCode == 32) {
//         userPull = 0.8;  
//     } else {
//         let whereToGo = e.keyCode;
//         currentGame.character.move(whereToGo);
//     }
// };

// document.onkeyup = function(e) {
//     if(e.keyCode == 32) {
//         userPull = 0;
//     }
// };

// FOR THE JUMP



// For the JUMP -> iNSIDE THE updateCanvas()

// currentGame.character.vy = currentGame.character.vy + (gravity - userPull);
// currentGame.character.y += currentGame.character.vy;
// currentGame.character.hitBottom();

// For the JUMP