let obstacleFrequency = 0;
let bonusFrequency = 0;
let crashMusic = new Audio();
crashMusic.src = '../music/clash.flac';
let bonusMusic = new Audio();
bonusMusic.src = '../music/pick-bonus.wav';

class Game {
    constructor() {
        this.character = {};
        this.obstacles = [];
        this.bonus = [];
        this.context= ctx;
        this.lives = '⭐⭐⭐⭐⭐';
        this.kms = 100;
        this.gameIsRunning = false;
        this.gameMusic = true;
    }

    paintScore() {
        //Lives
        ctx.font = '20px Arial';
        ctx.fillStyle = "red";
        ctx.fillText(`${this.lives}`, 10, 50);
        //Kilometres
        // ctx.font = '20px Press Start 2P';
        // ctx.fillStyle = "black";
        // ctx.fillText(`${this.kms}km`, 25, 90);
    }
    
    //Frequency of the Obstacles
    obstacleFrequency() {
        obstacleFrequency ++;
        if(obstacleFrequency % 70 === 1) {
            let randomObstacleX = 800;
            let randomObstacleY = Math.floor(Math.random()*420);
            let newObstacle = new Obstacle (randomObstacleX, randomObstacleY);
            newObstacle.drawObstacle();
            this.obstacles.push(newObstacle);
        }
    }

    //Frequency of the Bonus
    bonusFrequency() {
        bonusFrequency ++;
        if(bonusFrequency % 1500 === 1) {
            let randomBonusX = 800;
            let randomBonusY = this.bonusPosition();
            let newBonus = new Bonus (randomBonusX, randomBonusY);
            newBonus.drawBonus();
            this.bonus.push(newBonus);
        }
    }

    bonusPosition() {
        //obter posicao random
        let position = Math.floor(Math.random()*250);

        //verificar se posicao random ja existe num obstaculo
        let overriding = this.obstacles.some((obstacle) => {
            if (position > obstacle.y && position < obstacle.y + obstacle.height) {
                return true;
            }
            return false;
        });

        //se posicao ja existir num obstaculo
        if (overriding) {
            //debugger;
            //volta a chamar a mesma funcao
            this.bonusPosition();
        }
       
        //retorna ultima posicao gerada
        return position;
    }

   
    //Collision with Obstacle
    detectCollision(enemy, index) {
        if(//Direita do Jogador colide a esquerda do obstáculo
            this.character.x + this.character.width > enemy.x &&
            this.character.x < enemy.x + enemy.width &&
            // a parte de baixo do jogador bate com a parte de cima do obstáculo.
            this.character.y + this.character.height > enemy.y &&
            this.character.y < enemy.y + enemy.height ) {
                crashMusic.play();
                let lives = this.lives;
                this.lives = lives.slice(0, -1);
                this.obstacles.splice(index, 1);
            }
    }

    //Collision with Bonus Object
    detectCollisionBonus(bonus, index) {
        if(//Direita do Jogador colide a esquerda do obstáculo
            this.character.x + this.character.width > bonus.x &&
            this.character.x < bonus.x + bonus.width &&
            // a parte de baixo do jogador bate com a parte de cima do obstáculo.
            this.character.y + this.character.height > bonus.y &&
            this.character.y < bonus.y + bonus.height ) {
                if(this.lives.length === 5) {
                    this.bonus.splice(index,1);
                } else {
                    bonusMusic.play();
                    this.bonus.splice(index, 1);
                    this.lives += '⭐';
                } 
            }
    }

    //Painting the Bonus
    paintBonus() {
        //Fazer com que os objectos recorram o eixo do X da direita para a esquerda.
        for (let i=0; i<this.bonus.length; i++) {
            this.bonus[i].x -=1;
            this.bonus[i].drawBonus();
        }
    }

    //Painting the Obstacles
    paintObstacles() {
        //Fazer com que os objectos recorram o eixo do X da direita para a esquerda.
        for (let i=0; i<this.obstacles.length; i++) {
            this.obstacles[i].x -=1;
            this.obstacles[i].drawObstacle();
        }
    }

    checkButtons() {
        if(currentGame.gameIsRunning) {
            document.getElementById('pause').innerHTML = 'Pause Game';
        } else {
            document.getElementById('pause').innerHTML = 'Resume Game';
        }
    }

    youWin() {
        if(this.kms === 0){
            document.getElementById('game-board').style.display = 'none';
            document.getElementById('game-over').style.display = 'none';
            document.getElementById('kms').style.display = 'none';
            document.getElementById('you-win').style.display = 'block';
            this.gameIsRunning = false;
            cancelAnimationFrame(animationFrameId);
        }
    }

    youLost() {
        if(this.lives === "") {
            this.gameIsRunning = false;
            cancelAnimationFrame(animationFrameId);
            document.getElementById('game-board').style.display = 'none';
            document.getElementById('you-win').style.display = 'none';
            document.getElementById('kms').style.display = 'none';
            document.getElementById('game-over').style.display = 'block';
        }
    }
}
