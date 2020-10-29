class Character {
    constructor () {
        this.x = 50;
        this.y = 250;
        this.width = 90;
        this.height = 80;
        this.img = '../img/submarine.png';
        this.speedX = 0;
        this.speedY = 0;
    }

    drawCharacter() {
        const characterImg = new Image ();
        characterImg.src = this.img;
        ctx.drawImage(characterImg, this.x, this.y, this.width, this.height); 
    }

    newPosition () {
        this.x += this.speedX;
        this.y += this.speedY;
     }

    move(keyCode) {
        ctx.clearRect(this.x, this.y, this.width, this.height);
        switch(keyCode) {
            case 39: // Move to the right
            if(this.x < 650) {
                this.speedX +=1;
            }else {
                this.x = 650;
                this.speedX = 0;
            }
            break;
            case 37: // Move to the left
            if(this.x > 30) {
                this.speedX -=1;
            }else {
                this.x = 30;
                this.speedX = 0;
            }
            break;
            case 38: // Move up
            if(this.y > 0) {
                this.speedY -=1; 
            }else {
                this.y = 0;
                this.speedY = 0;
            }
            break;
            case 40: // Move down
            if(this.y< 400) {
                this.speedY +=1;
            } else {
                this.y = 400;
                this.speedY = 0;
            }
            break;
        }
    }
}  


