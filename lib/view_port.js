/* global createjs */

class viewPort {
  constructor(stage) {
    this.stage = stage;
  }

  render () {
    const taikoBlackMid = new createjs.Bitmap("assets/images/taiko_black.png");
    taikoBlackMid.x = 155;
    taikoBlackMid.y = 505;
    taikoBlackMid.scaleX = taikoBlackMid.scaleY = 0.5;

    const taikoBlackLeft = new createjs.Bitmap("assets/images/taiko_black.png");
    taikoBlackLeft.x = 35;
    taikoBlackLeft.y = 505;
    taikoBlackLeft.scaleX = taikoBlackLeft.scaleY = 0.5;

    const taikoBlackRight = new createjs.Bitmap("assets/images/taiko_black.png");
    taikoBlackRight.x = 275;
    taikoBlackRight.y = 505;
    taikoBlackRight.scaleX = taikoBlackRight.scaleY = 0.5;

    let stage = this.stage;
    taikoBlackMid.image.onload = function() {
      stage.update();
    }; // image won't load unless you call this onload function

    this.stage.addChild(taikoBlackMid); // must call if you want to put something.
    this.stage.addChild(taikoBlackRight); // must call if you want to put something.
    this.stage.addChild(taikoBlackLeft); // must call if you want to put something.

    this.stage.update();
  } //end render
} //end class viewPort

export default viewPort;
