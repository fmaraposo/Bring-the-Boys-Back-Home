class Character {
    constructor () {
        this.x = 50;
        this.y = 250;
        this.width = 100;
        this.height = 90;
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
            case 68: // Move to the right
            if(this.x < 650) {
                this.speedX +=1;
            }else {
                this.x = 650;
                this.speedX = 0;
            }
            break;
            case 65: // Move to the left
            if(this.x > 30) {
                this.speedX -=1;
            }else {
                this.x = 30;
                this.speedX = 0;
            }
            break;
            case 87: // Move up
            if(this.y > 0) {
                this.speedY -=1; 
            }else {
                this.y = 0;
                this.speedY = 0;
            }
            break;
            case 83: // Move down
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


