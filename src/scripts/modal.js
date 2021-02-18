import {drawModalItems} from './item';

export function drawModal(ctx, animated, landingModal, pauseModal, lives, GAME_WIDTH, GAME_HEIGHT) {
  if (!animated && landingModal) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Welcome to aA Survival!!", 50, 50);
    ctx.fillText("App Academy is a rigorous 1000+ hour bootcamp that pushes students", 50, 80);
    ctx.fillText("to their limit. Throughout this course, students learn the fundamentals of", 50, 105);
    ctx.fillText("what it takes to become a software engineer. Some essentials include:", 50, 130);
    ctx.fillText("-pushing to github, eating bread, coffee, passing exams, and lots of coding.", 50, 155);
    ctx.fillText("By playing this game, you will come to understand how it felt", 50, 210);
    ctx.fillText("to survive at App Academy.", 50, 240);
    ctx.fillText("Try and get the highest score by collecting these items: ", 50, 300);
    ctx.fillText("and avoiding these items: ", 50, 410);
    ctx.font = "small-caps bold 20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Hit Enter to start!!", 50, 550)
    drawModalItems(ctx);
  } else if (!animated && pauseModal) {
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