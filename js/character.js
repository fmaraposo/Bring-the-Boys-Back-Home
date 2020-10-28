class Character {
    constructor () {
        this.x = 50;
        this.y = 250;
        this.width = 90;
        this.height = 80;
        this.img = '../img/submarine.png';
        this.vy = 20;
    }

    drawCharacter() {
        const characterImg = new Image ();
        characterImg.src = this.img;
        ctx.drawImage(characterImg, this.x, this.y, this.width, this.height); 
    }

    move(keyCode) {
        ctx.clearRect(this.x, this.y, this.width, this.height);
        switch(keyCode) {
            case 39: // Move to the right
            if(this.x < 650) {
                this.x += 10;
            }
            break;
            case 37: // Move to the left
            if(this.x > 30) {
                this.x -= 10;
            }
            break;
            case 38: // Move up
            if(this.y > 0) {
                this.y -= 10; 
            }
            break;
            case 40: // Move down
            if(this.y< 360) {
                this.y +=10;
            }
            break;
        }
    }

    // hitBottom() {
    //     let rockBottom = 250;
    //     if (this.y > rockBottom) {
    //        this.y = rockBottom;
    //         this.vy = 0;
    //     }  
    // }
}  


