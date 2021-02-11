const itemDimensions = [
  {x: 256, y: 0, grab: 32, name: "laptop"}, //
  {x: 256, y: 480, grab: 32, name: "croissant"},
  {x: 416, y: 0, grab: 32, name: "error"},
  {x: 0, y: 352, grab: 32, name: "coffee"},
  {x: 160, y: 160, grab: 32, name: "exam"},
  {x: 224, y: 224, grab: 32, name: "tv"},
  {name: "github", src: "./src/images/github.png"},
  {name: "kahoot", src: "./src/images/kahoot.png"}
]

//this object will contain the only items that are rendered on the board at any given time, the max should be itemCount
let fallingItems = {};

export function drawItems(ctx, itemCount, gameWidth, gameHeight) {
  let items = itemDimensions;
  let randomItem = items[Math.floor(Math.random() * items.length)];
  if(Object.keys(fallingItems).length < itemCount) {
    fallingItems[randomItem.name] ||= new Item(gameWidth, gameHeight, randomItem)
  }
  Object.keys(fallingItems).forEach(item => {
    if (fallingItems[item].status == 0) {
      delete fallingItems[item];
    } else {
      fallingItems[item].update();
      fallingItems[item].drawItems(ctx)
    }
  })
  // if Object.keys(fallingItems.length < itemCount), add random item from itemDimension to fallingItems
  // if Object.keys(fallingItems.length == itemCount)
  // and if Object
  // itemDimensions.forEach(item => {
  //   fallingItems[item.name] ||= new Item(gameWidth, gameHeight)
  //   fallingItems[item.name].update();
  //   fallingItems[item.name].drawItems(ctx, item);
  // })
}

class Item {
  constructor(gameWidth, gameHeight, randomItem) {
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
          x, y, //itemssheet x, y (top left corner of the grab)
          grab, grab, // how big of a grab
          this.position.x, this.position.y, // where you want the crop to be placed
          this.width, this.height, // size of placement of what was grabbed
        )
      } else if (name == "github") {
        let pix = new Image();
        pix.src = src;
        ctx.beginPath();
        ctx.arc(this.position.x + this.width / 2, this.position.y + this.height / 2, 20, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
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
      // this.position.y = -(Math.floor(Math.random() * this.gameHeight));
      // this.position.x = Math.floor(Math.random() * (this.gameWidth - this.width));
      // this.status = 1;
    }
  }
}

// export default Item;