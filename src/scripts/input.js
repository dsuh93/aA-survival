class InputHandler {
  constructor(sprite) {
    document.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 37:
          sprite.moveLeft();
          break;
        case 38:
          sprite.jump();
          break;
        case 39:
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