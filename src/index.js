import './styles/index.scss';
import InputHandler from './scripts/input';
import Sprite from './scripts/sprite';
import {fallingItems, drawItems, drawModalItems} from './scripts/item';
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
  let animated = false;
  let landingModal = true;
  let pauseModal = false;
  new InputHandler(imgSprite);
  let body = document.getElementById("body");
  let title = document.getElementById("title");

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
    animated = false;
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    alert(`GAME OVER!! Your score was: ${score.score}`);
    body.classList.remove("start");
    body.classList.add("gameover");
    title.classList.remove("start");
    title.classList.add("gameover");
    drawModal(ctx);
  }

  function startGame() {
    animated = true;
    landingModal = false;
    if (animated) {
      body.classList.add("start");
      title.classList.add("start");
      gameLoop(lastTime);
      requestAnimationFrame(gameLoop)
    }
  }

  function pauseGame() {
    debugger
    if (animated) {
      debugger
      animated = false;
      pauseModal = true;
      drawModal(ctx);
    } else {
      pauseModal = false;
      startGame();
    }
  }

  function gameLoop(timestamp) {
    if (animated) {
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
  }

  function drawModal(ctx) {
    debugger
    if (!animated && landingModal) {
      ctx.fillStyle = "skyblue";
      ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
      ctx.font = "20px Arial";
      ctx.fillStyle = "black";
      ctx.fillText("Welcome to aA Survival!!", 100, 100);
      ctx.fillText("Try and get the highest score by collecting these items: ", 100, 200);
      ctx.fillText("and avoiding these items: ", 100, 300);
      ctx.font = "small-caps 20px Arial";
      ctx.fillStyle = "black";
      ctx.fillText("Hit Enter to start!!", 100, 500)
      drawModalItems(ctx);
    } else if (!animated && pauseModal) {
      debugger
      ctx.fillStyle = "rgba(0, 0, 0, 0.3";
      ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
      ctx.fill();

      ctx.font = "small-caps 50px Arial";
      ctx.fillStyle = "white";
      ctx.fillText("Paused", 300, 200)
    } else if (lives == 0) {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
      ctx.font = "small-caps 50px Arial";
      ctx.fillStyle = "white";
      ctx.fillText("Try again?", 280, 200);
      ctx.fillText("Hit Enter", 290, 400);
    }
  }
  
  
  document.addEventListener("keydown", e => {
    debugger
    switch (e.key) {
      case "Enter":
        debugger
        if (!animated && lives == 0) {
          document.location.reload();
        } else if (!animated) {
          startGame();
        }
        break;
      case " ":
        debugger
        pauseGame();
        break;
    }
  })

  drawModal(ctx);
})

// import './styles/index.scss';
// import Game from './scripts/game';
// import ModalItems from './scripts/modal';


// document.addEventListener("DOMContentLoaded", () => {
//   let game = new Game();
//   const modal = new ModalItems();
//   modal.drawModalItems();
//   const enter = document.getElementById("landing-modal");
//   let enterCount = 0;
//   document.addEventListener("keydown", e => {
//     switch (e.key) {
//       case "Enter":
//         debugger
//         enter.classList.add("hidden");
//         if (enterCount <= 1) {
//           enterCount += 1;
//           game.startGame();
//         }
//         break;
//       case " ":
//         game.pauseGame();
//         break;
//     }
//   })
  
// })