/* global createjs */

import { ConanTheme } from './sounds';
import { TaikoBlue, TaikoRed, TaikoGold, FireworkGradients } from './tap';

class Game {
  constructor(stage){
    this.stage = stage;
    this.pause = true;
    this.rowLeft = [];
    this.rowMid = [];
    this.rowRight = [];

    this.messageGood = ["", "Fantastic!", "Amazing!", "Good Job!", "Right On!", "Perfect!", "Direct Hit!"];
    this.messageBad = ["Missed!", "Not Even Close!", "Try Again!"];

    this.play = this.play.bind(this);
    this.music = this.music.bind(this);
  } //end constructor



  play(){

    let times = [ 5000, 9000, 14000, 20000];

    this.redInt = setInterval( this.createRedTaps(), times[0] );
    this.blueInt = setInterval( this.createBlueLeftTaps(), times[0] );
    this.blueInt = setInterval( this.createBlueRightTaps(), times[0] );

    const bgmConan = ConanTheme();

    this.music(bgmConan);
  } // end play

  music(bgm){
    bgm.volume = 0.2;
    bgm.play();
    this.pause = false;

    const volumeControl = document.getElementById("volume");
    volumeControl.addEventListener("mousemove", setVolume);

    function setVolume(){
      bgm.volume = volumeControl.value * 0.01;
    } // end setVolume

    const muteButton = document.getElementById("info-music-mute-button")
      .addEventListener("click", () => {
        if (this.pause === true) {
          bgm.play();
          this.pause = false;
        } else {
          bgm.pause();
          this.pause = true;
        } //end if
      }); // end muteButton
  }



createRedTaps(speed=100){
    const that = this;
    let redTap = TaikoRed(175, 0);
    that.rowMid.push(redTap);
    that.stage.addChild(redTap);

    createjs.Ticker.setFPS(30);
    createjs.Ticker.on("tick", Move.bind(this));

    function Move(e) {
      redTap.y += e.delta/1000*speed;
      if (that.rowMid.length !== 0 && that.rowMid[0].y < 10){
        console.log("passed");
      } else {
        that.stage.update(e);
      }
    }
    // move 100 pixels per second (elapsedTimeInMS / 1000msPerSecond * pixelsPerSecond):

  }

  createBlueLeftTaps(speed=100){
      const that = this;
      let blueLeftTap = TaikoBlue(55, 0);
      that.rowLeft.push(blueLeftTap);
      that.stage.addChild(blueLeftTap);

      createjs.Ticker.setFPS(30);
      createjs.Ticker.on("tick", (e) =>  {
      // move 100 pixels per second (elapsedTimeInMS / 1000msPerSecond * pixelsPerSecond):
        blueLeftTap.y += e.delta/1000*speed;
        that.stage.update();
      });
    }

    createBlueRightTaps(speed=100){
        const that = this;
        let blueRightTap = TaikoBlue(295, 0);
        that.rowRight.push(blueRightTap);
        that.stage.addChild(blueRightTap);

        createjs.Ticker.setFPS(30);
        createjs.Ticker.on("tick", (e) =>  {
        // move 100 pixels per second (elapsedTimeInMS / 1000msPerSecond * pixelsPerSecond):
          blueRightTap.y += e.delta/1000*speed;
          that.stage.update();
        });
      }
} //end Game

export default Game;
//
// let that = this;
//
// createjs.Ticker.setFPS(30);
//
// function createLeftArrow() {
//   let leftMovingArrow = new Arrows.leftMovingArrow();
//   that.currentLeftArrows.push(leftMovingArrow);
//   that.stage.addChild(leftMovingArrow);
//   that.stage.update();
//   createjs.Ticker.on("tick", leftTick.bind(this));
//   function leftTick(event) {
//     leftMovingArrow.y -= event.delta/1000 * 100;
//     if (that.currentLeftArrows.length !== 0 && that.currentLeftArrows[0].y < 10) {
//       that.showMiss();
//       that.removeHitLeft();
//     }
//     that.stage.update(event);
//   }
// }
