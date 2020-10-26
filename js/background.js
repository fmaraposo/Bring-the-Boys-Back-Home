const backgroundImg = new Image (); 
backgroundImg.src = '../img/background-canvas.jpeg';

class Background {
    constructor (canvas, canvasContext) {
        this.x = -1;
        this.canvasContext = canvasContext;
        this.canvas = canvas;
        this.img = backgroundImg;
        this.resizeImage();
    }
    
    draw() {
        //Mudar este check em função ao movimento da personagem. this.player.x
        if(this.x > 800) {
            this.x = -1;
        } 
        this.canvasContext.drawImage(this.img, -this.x ,0, this.img.width, this.img.height);
        this.canvasContext.drawImage(this.img, this.img.width -this.x,0, this.img.width, this.img.height);
        this.x = this.x + 1;
    }
    resizeImage() {
        this.img.width = this.canvas.width;
        this.img.height = this.canvas.height;
    }
    move() {

    }
}

