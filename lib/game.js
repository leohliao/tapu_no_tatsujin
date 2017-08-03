/* global createjs */

import { ConanTheme, WilliamOverture } from './sounds';
import { TaikoBlue, TaikoRed, TaikoGold, FireworkGradients } from './tap';
import { Don, Ka } from './sounds';

class Game {
  constructor(stage){
    this.stage = stage;
    this.pause = true;
    this.currentRowLeft = [];
    this.currentRowMid = [];
    this.currentRowRight = [];

    //animation frame rate
    createjs.Ticker.setFPS(30);

    this.messageGood = ["", "Fantastic!", "Amazing!", "Good Job!", "Right On!", "Perfect!", "Direct Hit!"];
    this.messageBad = ["Missed!", "Not Even Close!", "Try Again!"];

    this.play = this.play.bind(this);
    this.music = this.music.bind(this);

    this.removeTap = this.removeTap.bind(this);
    this.createRedTaps = this.createRedTaps.bind(this);
    this.createBlueLeftTaps = this.createBlueLeftTaps.bind(this);
    this.createBlueRightTaps = this.createBlueRightTaps.bind(this);
  } //end constructor

  play(){

    // let time = Math.round((Math.random() * (3000 - 1000)) + 1000);

    this.redInt = setInterval( this.createRedTaps, 1200 );
    this.blueInt = setInterval( this.createBlueLeftTaps, 1000 );
    this.blueInt = setInterval( this.createBlueRightTaps, 3000 );

    const bgmWilliam = WilliamOverture();

    this.music(ConanTheme());
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
  } // end music

  removeTap(element) {
    this.stage.removeChild(element[0]);
    element.shift();
    this.stage.update();
  } //end removeTap

  tapRed() {
    Don().play();
    let tapGoldM = TaikoGold(165);
    this.stage.addChild(tapGoldM);
    this.stage.update();
    setTimeout(() => {
      this.stage.removeChild(tapGoldM);
       }, 150);
    if (this.currentRowMid[0] &&
        this.currentRowMid[0].y > 518 &&
        this.currentRowMid[0].y < 532) {
        this.removeTap(this.currentRowMid);
        console.log("MID:HIT");
    } else {
      console.log("Mid:MISS");
    }
  } // end tapRed

  tapBlueLeft() {
    Ka().play();
    let tapGoldL = TaikoGold();
    this.stage.addChild(tapGoldL);
    this.stage.update();
    setTimeout(() => {
      this.stage.removeChild(tapGoldL);
      tapGoldL.clear; }, 150);
    if (this.currentRowLeft[0] &&
        this.currentRowLeft[0].y > 518 &&
        this.currentRowLeft[0].y < 532) {
      console.log("Left:HIT");
      this.removeTap(this.currentRowLeft);
    } else {
      console.log("Left:MISS");
    }
  } //tapBlueLeft

  tapBlueRight() {
    Ka().play();
    let tapGoldR = TaikoGold(285);
    this.stage.addChild(tapGoldR);
    this.stage.update();
    setTimeout(() => {
      this.stage.removeChild(tapGoldR);
      tapGoldR.clear;}, 150);
    if (this.currentRowRight[0] &&
        this.currentRowRight[0].y > 518 &&
        this.currentRowRight[0].y < 532) {
      console.log("Right:HIT");
      this.removeTap(this.currentRowRight);
    } else {
      console.log("Right:MISS");
    }
  }  // tapBlueRight

  createRedTaps(speed=100){
      const that = this;
      let redTap = TaikoRed(175, 0);
      that.currentRowMid.push(redTap);
      that.stage.addChild(redTap);
      createjs.Ticker.on("tick", tick);
      function tick(e) {
        redTap.y += e.delta/1000*speed;// move 100 pixels per second (elapsedTimeInMS / 1000msPerSecond * pixelsPerSecond):
        if (that.currentRowMid.length !== 0 &&
            that.currentRowMid[0].y > 600){
          that.removeTap(that.currentRowMid);
        } else {
          that.stage.update(e);
        }
      }
    }//end createRedTaps

  createBlueLeftTaps(speed=100){
      const that = this;
      let blueLeftTap = TaikoBlue(55, 0);
      that.currentRowLeft.push(blueLeftTap);
      that.stage.addChild(blueLeftTap);
      createjs.Ticker.on("tick", tick);
      function tick(e){
        blueLeftTap.y += e.delta/1000*speed;
        if (that.currentRowLeft.length !== 0 &&
            that.currentRowLeft[0].y > 600){
          that.removeTap(that.currentRowLeft);
        } else {
          that.stage.update(e);
        }
      }
    }// end createBlueLeftTaps

    createBlueRightTaps(speed=100){
        const that = this;
        let blueRightTap = TaikoBlue(295, 0);
        that.currentRowRight.push(blueRightTap);
        that.stage.addChild(blueRightTap);
        createjs.Ticker.on("tick", tick);
        function tick(e){
          blueRightTap.y += e.delta/1000*speed;
          if (that.currentRowRight.length !== 0 &&
              that.currentRowRight[0].y > 600) {
            that.removeTap(that.currentRowRight);
          } else {
            that.stage.update();
          }
        }
      }//end createBlueRightTaps

} //end Game

export default Game;
