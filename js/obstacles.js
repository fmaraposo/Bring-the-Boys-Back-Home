class Obstacle {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.img = '/img/iceberg.png';
        this.width = 40;
        this.height = 50;
    }

    drawObstacle () {
        const obstImg = new Image();
        obstImg.src = this.img;
        ctx.drawImage(obstImg, this.x, this.y, this.width, this.height);
    }
 }
