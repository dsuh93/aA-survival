import './styles/index.scss';
import InputHandler from './scripts/input';
import Sprite from './scripts/sprite';
import {fallingItems, drawItems} from './scripts/item';
import Background from './scripts/background';
import Score from './scripts/score';
import {drawModal} from './scripts/modal';
import * as game from './scripts/game';

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  const GAME_WIDTH = 800;
  const GAME_HEIGHT = 600;

  // variables
  let bgMusic = new Audio("./src/sound/mixkit-rnb-224.mp3");
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
  let controlsButton = document.getElementById("controls-button");
  let controlsInstructions = document.getElementById("controls-instructions");
  let music = false;
  let play = document.getElementById("play-icon");
  let pause = document.getElementById("pause-icon");
  let musicButton = document.getElementById("music-button");

  musicButton.addEventListener("click", e => {
    e.preventDefault();
    if (music) {
      music = false;
      musicControl("pause");
      toggleMusicIcon("pause");
    } else {
      music = true;
      musicControl("play");
      toggleMusicIcon("play");
    }
  })

  function toggleMusicIcon(action) {
    if (action === "play") {
      debugger
      pause.classList.remove("hidden");
      play.classList.add("hidden");
    } else {
      debugger
      pause.classList.add("hidden");
      play.classList.remove("hidden");
    }
  }

  function musicControl(action) {
    if (action === "play") {
      bgMusic.loop = true;
      bgMusic.play();
    } else if (action === "pause") {
      bgMusic.pause();
    }
  }

  controlsButton.addEventListener("mouseover", e => {
    e.preventDefault();
    controlsInstructions.classList.remove("hidden");
  })
  controlsButton.addEventListener("mouseout", e => {
    e.preventDefault();
    controlsInstructions.classList.add("hidden");
  })

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
        for (let i = (x + 25); i < ((x + w) - 25); i++) {
          for (let j = (y + 25); j < ((y + h) - 25); j ++) {
            if (i > ix && i < (ix + iw) && j > iy && j < (iy + ih)) {
              item.status = 0;
              score.scoreCount(item);
              if (item.name == "exam") {
                level++;
                itemCount += 1;
                item.fallingSpeed++;
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
    drawModal(ctx, animated, landingModal, pauseModal, lives, GAME_WIDTH, GAME_HEIGHT);
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
    if (animated) {
      animated = false;
      pauseModal = true;
      drawModal(ctx, animated, landingModal, pauseModal, lives, GAME_WIDTH, GAME_HEIGHT);
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
  
  document.addEventListener("keydown", e => {
    switch (e.key) {
      case "Enter":
        if (!animated && lives == 0) {
          document.location.reload();
        } else if (!animated) {
          startGame();
          if (!music) {
            music = true;
            musicControl("play");
            toggleMusicIcon("play");
          }
        }
        break;
      case " ":
        pauseGame();
        if (music) {
          music = false;
          musicControl("pause");
          toggleMusicIcon("pause");
        } else {
          music = true;
          musicControl("play");
          toggleMusicIcon("play");
        }
        break;
    }
  })

  drawModal(ctx, animated, landingModal, pauseModal, lives, GAME_WIDTH, GAME_HEIGHT);
})