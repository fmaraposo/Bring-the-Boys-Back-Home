class Character {
    constructor () {
        this.x = 50;
        this.y = 250;
        this.width = 100;
        this.height = 150;
        this.img = '../img/monkey-player.gif';
        this.jumping = true;
        this.vy = 2;
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
        }
        // JUMP ->
    }

    hitBottom() {
        let rockBottom = 250;
        if (this.y > rockBottom) {
           this.y = rockBottom;
            this.vy = 0;
        }  
    }
}  


