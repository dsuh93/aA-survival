import './styles/index.scss';
import InputHandler from './scripts/input';
import Sprite from './scripts/sprite';
import {fallingItems, drawItems} from './scripts/item';
import Background from './scripts/background';

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  const GAME_WIDTH = 800;
  const GAME_HEIGHT = 600;

  // variables
  let imgSprite = new Sprite(GAME_WIDTH, GAME_HEIGHT);
  // let item1 = new Item(GAME_WIDTH, GAME_HEIGHT);
  // let item2 = new Item(GAME_WIDTH, GAME_HEIGHT);
  // let item3 = new Item(GAME_WIDTH, GAME_HEIGHT);
  // let item4 = new Item(GAME_WIDTH, GAME_HEIGHT);
  let itemCount = 5;
  let bg = new Background(GAME_WIDTH, GAME_HEIGHT);
  let lastTime = 0;
  let frames = 0;
  let bgframes = 0;
  new InputHandler(imgSprite);


  function collisionDetection() {
    Object.keys(fallingItems).forEach()
  }

  function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    bg.update(deltaTime);
    imgSprite.update(deltaTime);
    bg.draw(ctx, bgframes);
    drawItems(ctx, itemCount, GAME_WIDTH, GAME_HEIGHT)
    imgSprite.draw(ctx, frames);
    if (frames == 60) {
      frames = 0;
    } else {
      frames++;
    }
    if (bgframes == 140) {
      bgframes = 0;
    } else {
      bgframes++;
    }

    requestAnimationFrame(gameLoop);
  }

  requestAnimationFrame(gameLoop);
})