class Bonus {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.img = '/img/power-stars-f1.png';
        this.width = 35;
        this.height = 35;
    }

    drawBonus () {
        const bonusImg = new Image();
        bonusImg.src = this.img;
        ctx.drawImage(bonusImg, this.x, this.y, this.width, this.height);
    }
 }
