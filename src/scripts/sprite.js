class Sprite {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    // this.sprite = document.getElementById("sprite-standing-2");
    this.width = 100;
    this.height = 100;

    this.maxSpeed = 7;
    this.speed = 0;
    this.vertical = 0;
    this.constants = {
      gravity: 0.4,
      jumpSpeed: -8,
      terminalVelocity: 12
    }

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10,
    }
  }

  jump() {
    this.vertical = this.constants.jumpSpeed;
  }

  fall() {
    this.vertical += this.constants.gravity;
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
    this.vertical = 0;
  }


  draw(ctx, frames) {
    let sprite = document.getElementById("sprite-standing-2");
    if (frames % 30 == 0) {
      this.sprite = document.getElementById("sprite-standing-1");
    } else {
      this.sprite = document.getElementById("sprite-standing-2");
    }
    ctx.drawImage(sprite, this.position.x, this.position.y, 100, 100)
  }

  update(deltaTime) {
    if(!deltaTime) return;
    this.position.x += this.speed;
    this.position.y += this.vertical;
    if (this.position.x < 0) {
      this.position.x = 0;
    }
    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
    // if (this.vertical < this.constants.terminalVelocity) {
    //   this.vertical += this.constants.gravity;
    // }
    if (this.position.y < this.gameHeight - (1.5 * this.position.y)) {
      this.position.y = this.gameHeight - (1.5 * this.position.y)
      this.vertical += this.constants.gravity;
    }
    if (this.position.y > this.gameHeight - this.height - 10) {
      this.position.y = this.gameHeight - this.height - 10;
    }
  }

}

export default Sprite;