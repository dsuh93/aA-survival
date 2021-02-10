class Background {
  constructor(gameWidth, gameHeight) {
    this.width = gameWidth;
    this.height = gameHeight;
  }

  draw(ctx, bgframes) {
    let bg;
    switch (true) {
      case (bgframes < 20):
        bg = document.getElementById("bg-1")
        break;
      case (bgframes < 40):
        bg = document.getElementById("bg-2")
        break;
      case (bgframes < 60):
        bg = document.getElementById("bg-3")
        break;
      case (bgframes < 80):
        bg = document.getElementById("bg-4")
        break;
      case (bgframes < 100):
        bg = document.getElementById("bg-5")
        break;
      case (bgframes < 120):
        bg = document.getElementById("bg-6")
        break;
      case (bgframes <= 140):
        bg = document.getElementById("bg-7")
        break;
    }
    ctx.drawImage(bg, 0, 0, this.width, this.height);
  }

  update(deltaTime) {
    if(!deltaTime) return;
  }
}

export default Background;