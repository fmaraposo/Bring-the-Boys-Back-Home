class Character {
    constructor () {
        this.x = 300;
        this.y = 400;
        this.with = 50;
        this.heigt = 80;
        this.img = '/img/monkey-player.gif';
    }

    drawCharacter(){
        const characterImg = new Image ();
        characterImg.src = this.img;
        ctx.drawImage(characterImg, this.x, this.y, this.width, this.height); 
    }
}  

