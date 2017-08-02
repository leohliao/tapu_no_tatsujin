/* global createjs */

import taikoBeatsRed from './tap';

class Game {
  constructor(stage){
    this.pause = true;
  } //end constructor

  play(){
    const bgmConan = new Audio('assets/sounds/conanTheme.mp3');
    bgmConan.play();
    this.pause = false;

    const volumeControl = document.getElementById("volume");
    volumeControl.addEventListener("mousemove", setVolume);

    function setVolume(){
      bgmConan.volume = volumeControl.value * 0.01;
    }

    const muteButton = document.getElementById("info-music-mute-button")
      .addEventListener("click", () => {
        if (this.pause === true) {
          bgmConan.play();
          this.pause = false;
        } else {
          bgmConan.pause();
          this.pause = true;
        }
      });
  } // end play

} //end Game

export default Game;
