/* global createjs */

class taikoBeatsRed {
  constructor() {
    let taikoRed = new createjs.Bitmap("./assets/images/taiko_red.png");
    taikoRed.x = 100;
    taikoRed.y = 600;
    return taikoRed;
  }

  Tick(e) {
    taikoBeatsRed.y = taikoBeatsRed.y + 3;
  }
}

export {
  taikoBeatsRed
};
