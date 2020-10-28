let obstacleFrequency = 0;

class Game {
    constructor() {
        this.character = {};
        this.obstacles = [];
        //this.gameIsRunning = false
        // this.score = 0;
    }
    obstacleFrequency() {
        obstacleFrequency ++;
        if(obstacleFrequency % 100 === 1) {
            let randomObstacleX = 800;
            let randomObstacleY = Math.floor(Math.random()*360);
            let newObstacle = new Obstacle (randomObstacleX, randomObstacleY);
            newObstacle.drawObstacle();
            this.obstacles.push(newObstacle);
        }
    }
    detectCollision(enemy) {
        if(//Direita do Jogador colide a esquerda do obstáculo
            this.character.x + this.character.width > enemy.x &&
            this.character.x < enemy.x + enemy.width &&
            // a parte de baixo do jogador bate com a parte de cima do obstáculo.
            this.character.y + this.character.height > enemy.y &&
            this.character.y < enemy.y + enemy.height ) {
                console.log('Boom');

            }
    }

    paintObstacles() {
        //Fazer com que os objectos recorram o eixo do X da direita para a esquerda.
        for (let i=0; i<this.obstacles.length; i++) {
            this.obstacles[i].x -=1;
            this.obstacles[i].drawObstacle();
        }
    }
}
