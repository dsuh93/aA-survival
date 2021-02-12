class Score {
  constructor() {
    this.score = 0;
  }

  drawScore(ctx) {
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`Score: ${this.score}`, 20, 30);
  }

  scoreCount(item) {
    let name = item.name;
    switch (name) {
      case "github":
        this.score += 5;
        break;
      case "kahoot":
        this.score += 5;
        break;
      case "croissant":
        this.score += 5;
        break;
      case "coffee":
        this.score += 5;
        break;
      case "laptop":
        this.score += 10;
        break;
      case "exam":
        this.score += 10;
        break;
      case "error":
        this.score -= 5;
        break;
      case "tv":
        this.score -= 5;
        break;
      case "hacker":
        this.score -= 10;
        break;
    }
  }
}

export default Score;