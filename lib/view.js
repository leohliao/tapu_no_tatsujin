/* global createjs */
import { TaikoBlack, startMessages } from './tap';

class View {
  constructor(stage) {
    this.stage = stage;
  }

  start() {
  let [chooseLevel, beginPlay, chooseLevelFill, beginPlayFill] = startMessages();
  this.stage.addChild(chooseLevel, beginPlay, chooseLevelFill, beginPlayFill);
  this.stage.update;
  document.addEventListener("click", () => {
    this.stage.removeChild(chooseLevel, beginPlay, chooseLevelFill, beginPlayFill);
  });
}

  render () {
    const taikoBlackLeft = TaikoBlack();
    const taikoBlackMid = TaikoBlack(155);
    const taikoBlackRight = TaikoBlack(275);

    this.start();
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

export default View;
