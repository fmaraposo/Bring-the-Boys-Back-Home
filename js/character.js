class Character {
    constructor () {
        this.x = 300;
        this.y = 300;
        this.width = 100;
        this.height = 150;
        this.img = '../img/monkey-player.gif';
    }

    drawCharacter() {
        const characterImg = new Image ();
        characterImg.src = this.img;
        ctx.drawImage(characterImg, this.x, this.y, this.width, this.height); 
    }
}  
