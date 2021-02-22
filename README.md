# aA-survival

![game-play](https://github.com/dsuh93/aA-survival/blob/main/src/images/AAsurvivalgif.gif)

# Background
aA Survival is a classic game of items dropping and you either avoid them or catch them.
The theme is a retro 16-bit style where an App Academy student tries to get the highest score while staying alive.
The player needs to catch falling items and avoid others in order to get/protect points.
Much like the real App Academy, the player also only has three 'fails' before game over.

Items that are included are:
  - Good items:
    - coffee: +5 points
    - github: +5 points
    - kahoot: +5 points
    - exams: +10 points
    - croissant: +5 points
  - Bad items:
    - tv: -5 points
    - error: -5 points
    - hacker: -1 life
    
Difficulty rises with each exam the user catches via increasing number of items on the screen.

# Functionality & MVP
Users will be able to:
  - start, pause, and exit game (pause will be on the space bar)
  - choose difficulty between easy, normal, and hard
  - move character using W, S, D for jump, left, and right
  - toggle music on and off
This project will also include:
  - an about to explain rules of the game
  - links to github/linkedin
  - a production README

# Collision Detection
  - A particularly interesting section of code includes the collision detection algorithm, using position of images on the canvas to change the score and status of items on the screen:
```javascript
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
```

# Architecture and Technologies
This project implements the following technologies:
  - Javascript for game logic
  - Canvas for drawing the game interface as well as all of the items in it
  - HTML and CSS for structure and styling

#Credits
  - item sprites were courtesy of VECTORPIXELSTAR: [link](https://vectorpixelstar.itch.io/mega-pixel-art-32x32-px-icons-sprite-sheet)
  - background music: RnB by Arulo [link](https://mixkit.co/free-stock-music/tag/lo-fi/)
   
