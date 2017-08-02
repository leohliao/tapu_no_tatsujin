/* global createjs */

import taikoBeatsRed from './tap';

class Game {
  constructor(stage){
    this.music;
    this.pause = true;
  } //end constructor

  play(){
    this.music = new Audio('assets/sounds/conanTheme.mp3');
    this.music.play();
    this.pause = false;

    const muteButton = document.getElementById("info-music-mute-button")
      .addEventListener("click", () => {
        if (this.pause === true) {
          this.music.play();
          this.pause = false;
        } else {
          this.music.pause();
          this.pause = true;
        }
      });
  } // end play

} //end Game

export default Game;
