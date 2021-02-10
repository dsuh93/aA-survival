import './styles/index.scss';
import InputHandler from './scripts/input';
import Sprite from './scripts/sprite';
import {drawItems} from './scripts/item';
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


  function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    bg.update(deltaTime);
    // item1.update(deltaTime);
    // item2.update(deltaTime);
    // item3.update(deltaTime);
    // item4.update(deltaTime);
    imgSprite.update(deltaTime);
    bg.draw(ctx, bgframes);
    // item1.draw(ctx);
    // item2.draw(ctx);
    // item3.draw(ctx);
    // item4.drawItems(ctx);
    drawItems(ctx, itemCount, GAME_WIDTH, GAME_HEIGHT)
    // item.draw(ctx);
    // item.drawItems(ctx);
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