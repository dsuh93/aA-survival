import './styles/index.scss';
import InputHandler from './scripts/input';
import Sprite from './scripts/sprite';

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  const GAME_WIDTH = 800;
  const GAME_HEIGHT = 600;

  let imgSprite = new Sprite(GAME_WIDTH, GAME_HEIGHT);
  let lastTime = 0;
  let frames = 0;
  new InputHandler(imgSprite);


  function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    imgSprite.update(deltaTime);
    imgSprite.draw(ctx);
    frames++;

    requestAnimationFrame(gameLoop);
  }

  requestAnimationFrame(gameLoop);
})