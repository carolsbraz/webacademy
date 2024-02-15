// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

// function to generate random color

const color = `${random(0, 255)},${random(0, 255)},${random(0, 255)}`

function randomRGB() {
    return `rgb(${color},${random(0, 100) / 100})`;
}

// ball funcions

function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

function Square(x, y, velX, velY, color, side) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.side = side;
}

Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
};

Square.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.rect(this.x, this.y, this.side, this.side);
    ctx.fill();
};

Ball.prototype.update = function () {
    if (this.x + this.size >= width) {
        this.velX = -this.velX;
    }

    if (this.x - this.size <= 0) {
        this.velX = -this.velX;
    }

    if (this.y + this.size >= height) {
        this.velY = -this.velY;
    }

    if (this.y - this.size <= 0) {
        this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
};

Square.prototype.update = function () {
    if (this.x + this.size >= width) {
        this.velX = -this.velX;
    }

    if (this.x - this.size <= 0) {
        this.velX = -this.velX;
    }

    if (this.y + this.size >= height) {
        this.velY = -this.velY;
    }

    if (this.y - this.size <= 0) {
        this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
};

Ball.prototype.collisionDetect = function () {
    for (let j = 0; j < balls.length; j++) {
        if (!(this === balls[j])) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = randomRGB()
            }
        }
    }
};

Square.prototype.collisionDetect = function () {
    for (let j = 0; j < squares.length; j++) {
        if (!(this === squares[j])) {
            const dx = this.x - squares[j].x;
            const dy = this.y - squares[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + squares[j].size) {
                squares[j].color = this.color = randomRGB()
            }
        }
    }
};


let balls = [];
let squares = [];

while (balls.length + squares.length < 25) {
    let type = random(1, 2);

    if (type == 2) {
        let size = random(10, 20);
        let ball = new Ball(
            // ball position always drawn at least one ball width
            // away from the edge of the canvas, to avoid drawing errors
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-7, 7),
            random(-7, 7),
            randomRGB(),
            size,
        );

        balls.push(ball);
    }else{
        let size = random(20, 30);
        let square = new Square(
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-7, 7),
            random(-7, 7),
            randomRGB(),
            size,
        );

        squares.push(square);
    }


}

function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update(); 
    }

    for (let j = 0; j < squares.length; j++) {
        squares[j].draw();
        squares[j].update();
        squares[j].collisionDetect();
    }

    requestAnimationFrame(loop);
}

loop();
