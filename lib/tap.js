/* global createjs */

export const startMessages = () => {
  let chooseLevel = new createjs.Text("Choose a level", "40px Luckiest Guy", "#000000");
  let beginPlay = new createjs.Text("to begin playing", "40px Luckiest Guy", "#000000");
  chooseLevel.x = 50;
  chooseLevel.y = 250;
  beginPlay.x = 40;
  beginPlay.y = 325;
  chooseLevel.outline = 5;
  beginPlay.outline = 5;
  let chooseLevelFill = chooseLevel.clone();
  chooseLevelFill.outline = false;
  chooseLevelFill.color = "red";
  let beginPlayFill = beginPlay.clone();
  beginPlayFill.outline = false;
  beginPlayFill.color = "red";
  return (
    [chooseLevel, beginPlay, chooseLevelFill, beginPlayFill]
  );
};

export const TaikoRed = (x=175, y= 525) => {
  let tapRed = new createjs.Bitmap("./assets/images/taiko_red.png");
  tapRed.x = x;
  tapRed.y = y;
  tapRed.scaleX = tapRed.scaleY = 0.5;
  return (
    tapRed
  );
};

export const TaikoBlue = (x=55, y=525) => {
  let tapBlue = new createjs.Bitmap("./assets/images/taiko_blue.png");
  tapBlue.x = x;
  tapBlue.y = y;
  tapBlue.scaleX = tapBlue.scaleY = 0.5;
  return (
    tapBlue
  );
};

export const TaikoGold = (x=45, y=515) => {
  let tapGold = new createjs.Bitmap("./assets/images/taiko_gold.png");
  tapGold.x = x;
  tapGold.y = y;
  tapGold.scaleX = tapGold.scaleY = 0.7;
  return (
    tapGold
  );
};

export const TaikoBlack = (x=35) => {
  let tapBlack = new createjs.Bitmap("./assets/images/taiko_black.png");
  tapBlack.x = x;
  tapBlack.y = 505;
  tapBlack.scaleX = tapBlack.scaleY = 0.5;
  return (
    tapBlack
  );
};

export const Fireworks = (x=260, y=490) => {
  let fireworks = new createjs.Bitmap("./assets/images/fireworks.png");
  fireworks.x = x;
  fireworks.y = y;
  fireworks.scaleX = fireworks.scaleY = 1.2;
  return (
    fireworks
  );
};

export const FireworkGradients = (x=260, y=490) => {
  let fireworks = new createjs.Bitmap("./assets/images/fireworks_gradient.png");
  fireworks.x = x;
  fireworks.y = y;
  fireworks.scaleX = fireworks.scaleY = 1.2;
  return (
    fireworks
  );
};

export const hitMessages = (x, y) => {
  const messageContainer = ["Great!", "Fantastic!", "Amazing!",
      "Good!", "Perfect!", "Hit!"];
  let messages = messageContainer[Math.floor( Math.random()
      * messageContainer.length)];
  let text = new createjs.Text();
  text.font = "20px Luckiest Guy";
  text.color = "white";
  text.text = messages;
  text.outline = 5;
  text.x = Math.floor(Math.random() * (y - x))+ x;
  text.y = Math.floor(Math.random() * (500-435)) + 435;
  let textFill = text.clone();
  textFill.outline = false;
  textFill.color = "red";
  return (
    [text, textFill]
  );
};

export const missMessages = (x, y) => {
  const messageContainer = ["Missed!", "Not Even Close!",
      "Try Again!"];
  let messages = messageContainer[Math.floor( Math.random()
      * messageContainer.length)];
  let text = new createjs.Text();
  text.font = "20px Luckiest Guy";
  text.color = "white";
  text.text = messages;
  text.outline = 4;
  text.x = Math.floor(Math.random() * (y - x))+ x;
  text.y = Math.floor(Math.random() * (500-435)) + 435;
  let textFill = text.clone();
  textFill.outline = false;
  textFill.color = "blue";
  return (
    [text, textFill]
  );
};

export const showScore = (score) => {
  let gameOver = new createjs.Text("Game Over", "45px Luckiest Guy", "white");
    gameOver.x = 75;
    gameOver.y = 200;
  let yourScore = new createjs.Text("You score is", "45px Luckiest Guy", "white");
    yourScore.x = 65;
    yourScore.y = 255;
  let finalScore = new createjs.Text(score, "50px Luckiest Guy", "white");
    finalScore.x = 140;
    finalScore.y = 310;
    return (
      [gameOver, yourScore, finalScore]
    );
};
