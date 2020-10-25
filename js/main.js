//Get Canvas

// Accessando o canvas através do DOM como objecto de JS.
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
document.getElementById('game-board').style.display = 'none';

document.getElementById('start-button').onclick = () => {
    startGame();
};

const canvasBackground = new Background (canvas, ctx);

function updateCanvas() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    canvasBackground.draw();
    requestAnimationFrame(updateCanvas);
}

function startGame () {
    document.getElementById('game-intro').style.display = 'none';
    document.getElementById('game-board').style.display = 'block';
    updateCanvas();
}

