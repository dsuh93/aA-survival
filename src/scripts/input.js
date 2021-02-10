class InputHandler {
  constructor(sprite) {
    document.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 37: //left arrow
          if (sprite.direction === "right") sprite.direction = "left";
          sprite.moveLeft();
          break;
        case 38: //up arrow
          if (!sprite.jumping) {
            sprite.jumping = true;
            sprite.jump();
          }
          break;
        case 39: //right arrow
        if (sprite.direction === "left") sprite.direction = "right";
          sprite.moveRight();
          break;
      }
    })
    document.addEventListener('keyup', (event) => {
      switch (event.keyCode) {
        case 37:
          if (sprite.speed < 0) {
            sprite.stop();
            sprite.fall();
          }
          break;
        case 38:
          if (sprite.vertical < 0) sprite.fall();
          break;
        case 39:
          if (sprite.speed > 0) {
            sprite.stop();
            sprite.fall();
          }
          break;
      }
    })
  }
}

export default InputHandler;