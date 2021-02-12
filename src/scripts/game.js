class Game {
  constructor() {
    
  }

  startGame() {

  }

  gameOver() {

  }
}

export default Game;

// import { canvas, ctx, GAME_WIDTH, GAME_HEIGHT } from './canvas';
// import Background from './background';
// import Sprite from './sprite';
// import {drawItems, fallingItems} from './item';
// import InputHandler from './input';

// class Game {
//   constructor(ctx) {
//     this.lastTime = 0;
//     this.frames = 0;
//     this.bgframes = 0;
//     this.level = 1;
//     this.score = 0;
//     this.lives = 3;
//     this.itemCount = 5;
//     this.animated = false;
//     this.sprite = new Sprite();
//     this.bg = new Background();
//     new InputHandler(this.sprite);
//     this.gameLoop = this.gameLoop.bind(this);
//     this.collisionDetection = this.collisionDetection.bind(this);
//     this.scoreChange = this.scoreChange.bind(this);
//   }

//   startGame() {
//     this.animated = true;
//     this.gameLoop(this.lastTime);
//     requestAnimationFrame(this.gameLoop);
//   }

//   pauseGame() {
//     if (this.animated) {
//       this.animated = false;
//     } else {
//       this.animated = true;
//       this.gameLoop(this.lastTime);
//       requestAnimationFrame(this.gameLoop);
//     }
//   }

//   gameOver() {
//     this.animated = false;
//     ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
//     //add dom manipulation here to pop up game over modal
//   }

//   gameLoop(timestamp) {
//     if (this.lives == 0) {
//       this.gameOver();
//     }
//     if (this.animated) {
//       let deltaTime = timestamp - this.lastTime;
//       this.lastTime = timestamp;
//       ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

//       //update fxs
//       this.bg.update(deltaTime);
//       this.sprite.update(deltaTime);
    
//       //draw fxs
//       this.bg.draw(this.bgframes);
//       drawItems(this.itemCount);
//       this.sprite.draw(this.frames);
//       this.collisionDetection();
//       if (this.frames == 60) {
//         this.frames = 0;
//       } else {
//         this.frames++;
//       }
//       if (this.bgframes == 140) {
//         this.bgframes = 0;
//       } else {
//         this.bgframes++;
//       }
//       requestAnimationFrame(this.gameLoop);
//     }
//   }

//   collisionDetection() {
//     let sprite = this.sprite;
//     let sx = sprite.position.x;
//     let sy = sprite.position.y;
//     let sw = sprite.width;
//     let sh = sprite.height;
//     Object.keys(fallingItems).forEach(key => {
//       let item = fallingItems[key];
//       let x = item.position.x;
//       let y = item.position.y;
//       let w = item.width;
//       let h = item.height;
//       if (item.status == 1) {
//         if ( sx > x && sx < (x + w) && sy > y && sy < (y + h)) {
//           item.status == 0;
//           // this.scoreChange(item);
//         }
//       }
//     })
//   }

//   scoreChange(item) {
//     let {name} = item;
//     switch (name) {
//       case "github":
//         this.score += 5;
//         break;
//       case "kahoot":
//         this.score += 5;
//         break;
//       case "croissant":
//         this.score += 5;
//         break;
//       case "laptop":
//         this.score += 10;
//         break;
//       case "coffee":
//         this.score += 5;
//         break;
//       case "exam":
//         this.score += 10;
//         break;
//       case "tv":
//         this.score -= 5;
//         break;
//       case "error":
//         this.score -= 5;
//         break;
//       case "hacker":
//         this.lives -= 1;
//         break;
//     }
//   }
// }

// export default Game;