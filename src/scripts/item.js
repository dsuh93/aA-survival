const itemDimensions = [
  {name: "github", src: "./src/images/github.png"}, // +5 pts
  {name: "kahoot", src: "./src/images/kahoot.png"}, // +5 pts
  {x: 256, y: 480, grab: 32, name: "croissant"}, // +5 pts
  {x: 0, y: 352, grab: 32, name: "coffee"}, // +3 sec
  {x: 256, y: 0, grab: 32, name: "laptop"}, // +10 pts
  {x: 160, y: 160, grab: 32, name: "exam"}, // +10 pts
  {x: 416, y: 0, grab: 32, name: "error"}, // -5 pts
  {x: 224, y: 224, grab: 32, name: "tv"}, // -5 pts
  {x: 224, y: 672, grab: 32, name: "hacker"}, // -1 life
]

//this object will contain the only items that are rendered on the board at any given time, the max should be itemCount
export const fallingItems = {};

export function drawItems(ctx, itemCount, level, gameWidth, gameHeight) {
  let items = itemDimensions;
  let randomItem = items[Math.floor(Math.random() * items.length)];
  if(Object.keys(fallingItems).length < itemCount) {
    fallingItems[randomItem.name] ||= new Item(gameWidth, gameHeight, randomItem, level)
  }
  Object.keys(fallingItems).forEach(item => {
    if (fallingItems[item].status == 0) {
      delete fallingItems[item];
    } else {
      fallingItems[item].update();
      fallingItems[item].drawItems(ctx)
    }
  })
}

class Item {
  constructor(gameWidth, gameHeight, randomItem, level) {
    this.width = 45;
    this.height = 45;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.position = {
      x: Math.floor(Math.random() * (this.gameWidth - this.width)),
      y: -(Math.floor(Math.random() * this.gameHeight))
    }
    this.speed = 0;
    this.fallingSpeed = 3;
    this.status = 1;
    this.randomItem = randomItem;
    this.name = randomItem.name;
  }

  drawItems(ctx) {
    let {x, y, grab, name, src} = this.randomItem;
    if (this.status == 1) {
      if(x || y) {
        let pix = new Image();
        pix.src = "src/images/items.png";
        ctx.fillStyle = "lightblue";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        ctx.drawImage(
          pix,
          x, y, 
          grab, grab, 
          this.position.x, this.position.y, 
          this.width, this.height, 
        )
      } else if (name == "github") {
        let pix = new Image();
        pix.src = src;
        ctx.beginPath();
        ctx.arc(this.position.x + this.width / 2, this.position.y + this.height / 2, 20, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.strokeStyle = "rgba(0, 0, 0, 0)";
        ctx.fill();
        ctx.stroke();
        ctx.drawImage(
          pix,
          this.position.x, this.position.y,
          this.width, this.height,
        )
      } else if (name == "kahoot") {
        let pix = new Image();
        pix.src = src;
        ctx.drawImage(
          pix,
          185, 160,
          210, 200,
          this.position.x, this.position.y,
          this.width, this.height
        )
      }
    }
  }

  update() {
    this.position.y += this.fallingSpeed;
    if (this.position.y > this.gameHeight - this.height - 10) {
      this.status = 0;
    }
  }
}