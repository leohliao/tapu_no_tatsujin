/* global createjs */

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

export const SelectToStart = () => {
  let startText = new createjs.Text('Select Difficult To Start',
"32px Luckiest Guy", "white");
  startText.x = 200;
  startText.y = 300;
};
