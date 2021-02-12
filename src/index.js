import './styles/index.scss';
import InputHandler from './scripts/input';
import Sprite from './scripts/sprite';
import {fallingItems, drawItems} from './scripts/item';
import Background from './scripts/background';
import Score from './scripts/score';

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  const GAME_WIDTH = 800;
  const GAME_HEIGHT = 600;

  // variables
  let imgSprite = new Sprite(GAME_WIDTH, GAME_HEIGHT);
  let bg = new Background(GAME_WIDTH, GAME_HEIGHT);
  let score = new Score();
  let level = 1;
  let lives = 3;
  let itemCount = 5;
  let lastTime = 0;
  let frames = 0;
  let bgframes = 0;
  new InputHandler(imgSprite);

  function drawLevel(ctx) {
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`Level: ${level}`, 200, 30)
  }

  function drawLives(ctx) {
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`Lives: ${lives}`, 300, 30)
  }

  function collisionDetection() {
    Object.keys(fallingItems).forEach(key => {
      let item = fallingItems[key];
      let ix = item.position.x;
      let iy = item.position.y;
      let iw = item.width;
      let ih = item.height;
      let sprite = imgSprite;
      let x = sprite.position.x;
      let y = sprite.position.y;
      let w = sprite.width;
      let h = sprite.height;
      if (item.status == 1) {
        for (let i = x; i < ((x + w) - 25); i++) {
          for (let j = y; j < ((y + h) - 25); j ++) {
            if ((i + 25) > ix && (i + 25) < (ix + iw) && (j + 25) > iy && (j + 25) < (iy + ih)) {
              item.status = 0;
              score.scoreCount(item);
              if (item.name == "exam") {
                level++;
                itemCount += 1;
              }
              if (item.name == "hacker") {
                lives--;
                if (lives == 0) {
                  gameOver();
                }
              }
              break;
            }
          }
          if (item.status == 0) break;
        }
      }
    })
  }

  function gameOver() {
    clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    alert("GAME OVER");
  }

  function startGame() {
    document.location.reload();
  }

  function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    bg.update(deltaTime);
    imgSprite.update(deltaTime);
    bg.draw(ctx, bgframes);
    drawItems(ctx, itemCount, level, GAME_WIDTH, GAME_HEIGHT)
    score.drawScore(ctx);
    drawLevel(ctx);
    drawLives(ctx);
    imgSprite.draw(ctx, frames);
    collisionDetection();
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