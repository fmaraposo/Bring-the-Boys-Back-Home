const backgroundImg = new Image (); 
backgroundImg.src = '../img/underwater tileable.png';

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
        //Mudar este check em função ao movimento da personagem. this.player.x
        // Se o boneco mexe para a esquerda o background tem que mexer direita
     /*   if(this.x > 800) {
            this.x = -1;
        } 
        this.canvasContext.drawImage(this.img, -this.x ,0, this.img.width, this.img.height);
        this.canvasContext.drawImage(this.img, this.img.width -this.x,0, this.img.width, this.img.height);
        this.x = this.x + 1;*/
        this.canvasContext.drawImage(this.img, this.x, 0);
        this.canvasContext.drawImage(this.img, this.x + canvas.width, 0);
    }   
    resizeImage() {
        this.img.width = this.canvas.width;
        this.img.height = this.canvas.height;
    }
}