const backgroundImg = new Image (); 
backgroundImg.src = '../img/deep-sea-bg.jpg';

class Background {
    constructor (canvas, canvasContext) {
        this.x = -1;
        this.canvasContext = canvasContext;
        this.canvas = canvas;
        this.img = backgroundImg;
        this.resizeImage();
        this.speed = -4;
    }
    
    move() {
        this.x += this.speed; //Everytime we call this function, the x decrease 1.
        this.x %= canvas.width; // Ele vê o que falta da tela para complementar, o outro lado.
    }
    
    draw() {
        this.canvasContext.drawImage(this.img, this.x, 0, canvas.width, canvas.height);
        this.canvasContext.drawImage(this.img, this.x + canvas.width, 0, canvas.width, canvas.height);
    }

    resizeImage() {
        this.img.width = this.canvas.width;
        this.img.height = this.canvas.height;
    }
}