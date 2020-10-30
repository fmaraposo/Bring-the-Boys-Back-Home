let currentCharacter;
let animationFrameId;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
document.getElementById('game-board').style.display = 'none';
document.getElementById('game-buttons').style.display = 'none';
document.getElementById('instructions-div').style.display ='none';
document.getElementById('game-over').style.display = 'none';
document.getElementById('you-win').style.display = 'none';
document.getElementById('kms').style.display ='none';

//Music Game
let musicGame = new Audio();
musicGame.src = '../music/smoky_180_proud_music_preview.mp3';

//Start Button
document.getElementById('start-button').onclick = () => {
    startGame();
};

//Instructions
document.getElementById("instructions").addEventListener ('click', function () {
    document.getElementById('kms').style.display ='none';
    cancelAnimationFrame(animationFrameId);
    document.getElementById('game-board').style.display = 'none';
    document.getElementById('pause').style.display = 'none';
    document.getElementById('instructions-div').style.display ='block';
});

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
 
//Audio Button
document.getElementById('audio').onclick = () => {
    if(currentGame.gameMusic) {
        currentGame.gameMusic = false;
        musicGame.pause();
        console.log('pause-music');
    } else {
        currentGame.gameMusic = true;
        musicGame.play();
        console.log('play-music');
    }
};

//Reset Button
document.getElementById('restart').onclick = () => {
    document.getElementById('you-win').style.display = 'none';
    document.getElementById("instructions-div").style.display = 'none';
    document.getElementById('pause').style.display = 'inline-block';
    currentGame.character = {};
    currentGame.obstacles = [];
    currentGame.bonus = [];
    currentGame.context= ctx;
    currentGame.lives = '⭐⭐⭐⭐⭐';
    currentGame.kms = 3000;
    startGame();
};



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
    document.getElementById('game-buttons').style.display = 'inline';
    document.getElementById('kms').style.display = 'block';
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
    let kmCounter = document.getElementById('kms');
kmCounter.innerHTML = `Home: ${currentGame.kms}kms`;
   currentGame.checkButtons();
    /* currentGame.checkAudioButtons(); */
    canvasBackground.move();
    canvasBackground.draw();
    currentGame.character.drawCharacter();
    currentGame.character.newPosition();
    currentGame.obstacleFrequency();
    currentGame.bonusFrequency();
    currentGame.paintScore();
    currentGame.paintObstacles();
    currentGame.paintBonus();
    currentGame.obstacles.forEach((obstacle, index) => {
        currentGame.detectCollision(obstacle, index);
    });
    currentGame.bonus.forEach((bonus, index) => {
        currentGame.detectCollisionBonus(bonus, index);
    });
    animationFrameId = requestAnimationFrame(updateCanvas);
    currentGame.youWin();
    currentGame.youLost();
}




















