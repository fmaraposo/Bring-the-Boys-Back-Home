let currentCharacter;
let animationFrameId;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
document.getElementById('game-board').style.display = 'none';
document.getElementById('game-over').style.display = 'none';
document.getElementById('you-win').style.display = 'none';

//Music Game
let musicGame = new Audio();
musicGame.src = '../music/smoky_180_proud_music_preview.mp3';

//Start Button
document.getElementById('start-button').onclick = () => {
    startGame();
};

//Pause Button
document.getElementById('pause').onclick = () => {
    if(currentGame.gameIsRunning) {
        currentGame.gameIsRunning = false;
        cancelAnimationFrame(animationFrameId);
        musicGame.pause();
        currentGame.checkButtons();

    } else {
        currentGame.gameIsRunning = true;
        updateCanvas();
        currentGame.checkButtons();
        musicGame.play();
    }
};

//Reset Button
document.getElementById('restart').onclick = () => {
    document.getElementById('you-win').style.display = 'none';
    currentGame.character = {};
    currentGame.obstacles = [];
    currentGame.bonus = [];
    currentGame.context= ctx;
    currentGame.lives = '⭐⭐⭐⭐⭐';
    currentGame.kms = 3000;
    startGame();
};

//Music Button 

document.onkeydown = (e) => {
    let whereToGo = e.keyCode;
    currentGame.character.move(whereToGo);
};

document.onkeyup = (e) => {
    currentGame.character.speedX = 0;
    currentGame.character.speedY = 0;
};

let canvasBackground = new Background (canvas, ctx);
let  currentGame = new Game ();  //Instantiate a new game

function startGame () {
    currentGame.gameIsRunning = true;
    cancelAnimationFrame(animationFrameId); 
    document.getElementById('game-intro').style.display = 'none';
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('game-board').style.display = 'block';
    //Instantiate a new monkey
    currentCharacter = new Character ();
    currentGame.character = currentCharacter;
    currentGame.character.drawCharacter();
    musicGame.play();
    //Refersh the all Canvas
    updateCanvas();
}
function updateCanvas() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    currentGame.kms--;
    currentGame.checkButtons();
    canvasBackground.move();
    canvasBackground.draw();
    currentGame.character.drawCharacter();
    currentGame.character.newPosition();
    currentGame.obstacleFrequency();
    currentGame.bonusFrequency();
    currentGame.paintScore();
    currentGame.paintObstacles();
    currentGame.paintBonus();
    currentGame.youWin();
    currentGame.obstacles.forEach((obstacle, index) => {
        currentGame.detectCollision(obstacle, index);
    });
    currentGame.bonus.forEach((bonus, index) => {
        currentGame.detectCollisionBonus(bonus, index);
    });
    animationFrameId = requestAnimationFrame(updateCanvas);
}




















