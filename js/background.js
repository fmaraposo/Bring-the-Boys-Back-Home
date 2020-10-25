
// Ela simula o objecto de imagem do DOM, é uma class já intrinseca ao JS
const img = new Image (); 
img.src = '../img/background-canvas.jpeg';


class Background {
    //constructor chamada sempre que se chama uma class
    constructor (canvas, canvasContext) {
        this.x = -1;
        this.canvasContext = canvasContext;
        this.canvas = canvas;
        this.img = img;
        this.resizeImage();
    }
    //É um método do getContext
    draw() {
        if(this.x > 800) {
            this.x = -1;
        } 
        //Desenhar a imagem desde o ponto  0,0 até ocupar o canvas.width e o canvas.height
        this.canvasContext.drawImage(this.img, -this.x ,0, this.img.width, this.img.height);
        this.canvasContext.drawImage(this.img, this.img.width -this.x,0, this.img.width, this.img.height);
        this.x = this.x + 1;
    }
    resizeImage() {
        this.img.width = this.canvas.width;
        this.img.height = this.canvas.height;
        console.log(this.canvas.width);
    }
    move() {

    }
}

//Dar um valor à função Draw que dependendo da tecla, ela incrementa ou decrementa o valor de x