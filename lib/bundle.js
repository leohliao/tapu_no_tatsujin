/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* global createjs */

const startMessages = () => {
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
/* harmony export (immutable) */ __webpack_exports__["h"] = startMessages;


const TaikoRed = (x=175, y= 525) => {
  let tapRed = new createjs.Bitmap("./assets/images/taiko_red.png");
  tapRed.x = x;
  tapRed.y = y;
  tapRed.scaleX = tapRed.scaleY = 0.5;
  return (
    tapRed
  );
};
/* harmony export (immutable) */ __webpack_exports__["d"] = TaikoRed;


const TaikoBlue = (x=55, y=525) => {
  let tapBlue = new createjs.Bitmap("./assets/images/taiko_blue.png");
  tapBlue.x = x;
  tapBlue.y = y;
  tapBlue.scaleX = tapBlue.scaleY = 0.5;
  return (
    tapBlue
  );
};
/* harmony export (immutable) */ __webpack_exports__["b"] = TaikoBlue;


const TaikoGold = (x=45, y=515) => {
  let tapGold = new createjs.Bitmap("./assets/images/taiko_gold.png");
  tapGold.x = x;
  tapGold.y = y;
  tapGold.scaleX = tapGold.scaleY = 0.7;
  return (
    tapGold
  );
};
/* harmony export (immutable) */ __webpack_exports__["c"] = TaikoGold;


const TaikoBlack = (x=35) => {
  let tapBlack = new createjs.Bitmap("./assets/images/taiko_black.png");
  tapBlack.x = x;
  tapBlack.y = 505;
  tapBlack.scaleX = tapBlack.scaleY = 0.5;
  return (
    tapBlack
  );
};
/* harmony export (immutable) */ __webpack_exports__["a"] = TaikoBlack;


const Fireworks = (x=260, y=490) => {
  let fireworks = new createjs.Bitmap("./assets/images/fireworks.png");
  fireworks.x = x;
  fireworks.y = y;
  fireworks.scaleX = fireworks.scaleY = 1.2;
  return (
    fireworks
  );
};
/* unused harmony export Fireworks */


const FireworkGradients = (x=260, y=490) => {
  let fireworks = new createjs.Bitmap("./assets/images/fireworks_gradient.png");
  fireworks.x = x;
  fireworks.y = y;
  fireworks.scaleX = fireworks.scaleY = 1.2;
  return (
    fireworks
  );
};
/* unused harmony export FireworkGradients */


const hitMessages = (x, y) => {
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
/* harmony export (immutable) */ __webpack_exports__["e"] = hitMessages;


const missMessages = (x, y) => {
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
/* harmony export (immutable) */ __webpack_exports__["f"] = missMessages;


const showScore = (score) => {
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
/* harmony export (immutable) */ __webpack_exports__["g"] = showScore;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tap__ = __webpack_require__(0);
/* global createjs */


//test


document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById('gameCanvas');
  const stage = new createjs.Stage(canvas); //similar to getElementById
  const view = new __WEBPACK_IMPORTED_MODULE_0__view__["a" /* default */](stage);
  const game = new __WEBPACK_IMPORTED_MODULE_1__game__["a" /* default */](stage);

  view.render();
  stage.update();

  function controlKeys (e) {
    e.preventDefault();
    switch (e.keyCode){
      case 66:
        game.tapRed();
        break;
      case 67:
        game.tapBlueLeft();
        break;
      case 77:
        game.tapBlueRight();
        break;
    }
  } // end controlKeys

  document.addEventListener("keydown", controlKeys, false);

  document.getElementById("level-beginner")
          .addEventListener("click", () => {
            game.play("beginner");
          });

  document.getElementById("level-normal")
          .addEventListener("click", () => {
            game.play("normal");
          });

  document.getElementById("level-master")
          .addEventListener("click", () => {
            game.play("master");
          });

  document.getElementById("stop")
          .addEventListener("click", () => {
            game.stop();
          });

  document.getElementById("reset")
          .addEventListener("click", () => {
            game.stop();
            game.reset();
          });

}); // end AddeventListener


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tap__ = __webpack_require__(0);
/* global createjs */


class View {
  constructor(stage) {
    this.stage = stage;
  }

  start() {
  let [chooseLevel, beginPlay, chooseLevelFill, beginPlayFill] = Object(__WEBPACK_IMPORTED_MODULE_0__tap__["h" /* startMessages */])();
  this.stage.addChild(chooseLevel, beginPlay, chooseLevelFill, beginPlayFill);
  this.stage.update;
  document.addEventListener("click", () => {
    this.stage.removeChild(chooseLevel, beginPlay, chooseLevelFill, beginPlayFill);
  });
}

  render () {
    const taikoBlackLeft = Object(__WEBPACK_IMPORTED_MODULE_0__tap__["a" /* TaikoBlack */])();
    const taikoBlackMid = Object(__WEBPACK_IMPORTED_MODULE_0__tap__["a" /* TaikoBlack */])(155);
    const taikoBlackRight = Object(__WEBPACK_IMPORTED_MODULE_0__tap__["a" /* TaikoBlack */])(275);

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

/* harmony default export */ __webpack_exports__["a"] = (View);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sounds__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tap__ = __webpack_require__(0);
/* global createjs */




class Game {
  constructor(stage){
    this.stage = stage;
    this.speed = 100;
    this.pause = true;
    this.score = 0;
    this.combo = 0;
    this.missed = 40;
    this.currentRowLeft = [];
    this.currentRowMid = [];
    this.currentRowRight = [];

    this.bgm;
    this.redInt;
    this.blueIntLeft;
    this.blueIntRight;

    //animation frame rate
    createjs.Ticker.setFPS(30);

    this.play = this.play.bind(this);
    this.music = this.music.bind(this);
    this.reset = this.reset.bind(this);
    this.stop = this.stop.bind(this);
    this.tapRed = this.tapRed.bind(this);
    this.myScore = this.myScore.bind(this);
    this.removeTap = this.removeTap.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.missMessage = this.missMessage.bind(this);
    this.tapBlueLeft = this.tapBlueLeft.bind(this);
    this.tapBlueRight = this.tapBlueRight.bind(this);
    this.createRedTaps = this.createRedTaps.bind(this);
    this.createInterval = this.createInterval.bind(this);
    this.createBlueLeftTaps = this.createBlueLeftTaps.bind(this);
    this.createBlueRightTaps = this.createBlueRightTaps.bind(this);
  } //end constructor

  play(difficulties){
    this.reset();
    let max = 1000;
    let min = 900;

      if (difficulties === "beginner") {
          this.speed = 120;
          this.music(Object(__WEBPACK_IMPORTED_MODULE_0__sounds__["a" /* ConanTheme */])());
          max = 1800;
          min = 900;
        } else if (difficulties === "normal"){
          this.speed = 180;
          this.music(Object(__WEBPACK_IMPORTED_MODULE_0__sounds__["e" /* WilliamOverture */])());
          max = 1100;
          min = 700;
        } else if (difficulties === "master") {
          this.speed = 250;
          this.music(Object(__WEBPACK_IMPORTED_MODULE_0__sounds__["d" /* Soysauce */])());
          max = 1000;
          min = 500;
        } // end if

        this.redInt = setInterval( function() {
          let intervalOne = this.createInterval(max, min);
          setTimeout(function(){this.createRedTaps(this.speed);}.bind(this), intervalOne);
        }.bind(this), 800 );

        this.blueIntLeft = setInterval( function(){
          let intervalTwo = this.createInterval(max, min);
          setTimeout(() => {this.createBlueLeftTaps(this.speed);}, intervalTwo);
        }.bind(this), 1200 );

        this.blueIntRight = setInterval( function(){
          let intervalThree = this.createInterval(max, min);
          setTimeout(() => {this.createBlueRightTaps(this.speed);}, intervalThree);
        }.bind(this), 1500 );
  } // end play

  music(bgm){
    this.bgm = bgm;
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

  createInterval(max=2000, min=500) {
    let value = Math.round(((Math.random() * (max - min)) + min)/100)* 100;
    this.interval = value;
    return this.interval;
  } // end createInterval

  removeTap(element) {
    this.stage.removeChild(element[0]);
    element.shift();
    this.stage.update();
  } //end removeTap

  tapRed() {
    if (this.pause === false) {
      Object(__WEBPACK_IMPORTED_MODULE_0__sounds__["b" /* Don */])().play();
      let tapGoldM = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["c" /* TaikoGold */])(165);
      this.stage.addChild(tapGoldM);
      this.stage.update();
      setTimeout(() => {
        this.stage.removeChild(tapGoldM);}, 150);
      if (this.currentRowMid[0] &&
          this.currentRowMid[0].y > 505 &&
          this.currentRowMid[0].y < 545) {
        this.removeTap(this.currentRowMid);
        this.hitMessage(130, 200);
      } else {
        this.missMessage(130, 200);
        this.missed -= 1;
      }
    } // end if
  } // end tapRed

  tapBlueLeft() {
    if (this.pause === false) {
      Object(__WEBPACK_IMPORTED_MODULE_0__sounds__["c" /* Ka */])().play();
      let tapGoldL = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["c" /* TaikoGold */])();
      this.stage.addChild(tapGoldL);
      this.stage.update();
      setTimeout(() => {
        this.stage.removeChild(tapGoldL);}, 150);
      if (this.currentRowLeft[0] &&
          this.currentRowLeft[0].y > 505 &&
          this.currentRowLeft[0].y < 535) {
        this.removeTap(this.currentRowLeft);
        this.hitMessage(5, 60);
      } else {
        this.missMessage(5, 60);
        this.missed -= 1;
      }
    } // end if
  } //tapBlueLeft

  tapBlueRight() {
    if (this.pause === false) {
      Object(__WEBPACK_IMPORTED_MODULE_0__sounds__["c" /* Ka */])().play();
      let tapGoldR = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["c" /* TaikoGold */])(285);
      this.stage.addChild(tapGoldR);
      this.stage.update();
      setTimeout(() => {
        this.stage.removeChild(tapGoldR);}, 150);
      if (this.currentRowRight[0] &&
          this.currentRowRight[0].y > 505 &&
          this.currentRowRight[0].y < 535) {
        this.removeTap(this.currentRowRight);
        this.hitMessage(250, 300);
      } else {
        this.missMessage(250, 300);
        this.missed -= 1;
      }
    } // end if
  }  // tapBlueRight

  createRedTaps(speed=100){
      const that = this;
      let redTap = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["d" /* TaikoRed */])(175, 0);
      that.currentRowMid.push(redTap);
      that.stage.addChild(redTap);
      createjs.Ticker.on("tick", tick);
      function tick(e) {
        redTap.y += e.delta/1000*speed;// move 100 pixels per second (elapsedTimeInMS / 1000msPerSecond * pixelsPerSecond):
        if (that.currentRowMid.length !== 0 &&
            that.currentRowMid[0].y > 600){
          that.removeTap(that.currentRowMid);
          that.missed -= 1;
          that.updateScore();
          if (that.missed < 1) {
            that.stop();
            that.myScore();
          }
        } else {
          that.stage.update(e);
        }
      }
    }//end createRedTaps

  createBlueLeftTaps(speed=100){
      const that = this;
      let blueLeftTap = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["b" /* TaikoBlue */])(55, 0);
      that.currentRowLeft.push(blueLeftTap);
      that.stage.addChild(blueLeftTap);
      createjs.Ticker.on("tick", tick);
      function tick(e){
        blueLeftTap.y += e.delta/1000*speed;
        if (that.currentRowLeft.length !== 0 &&
            that.currentRowLeft[0].y > 600){
          that.removeTap(that.currentRowLeft);
          that.missed -= 1;
          that.updateScore();
          if (that.missed < 1) {
            that.stop();
            that.myScore();
          }
        } else {
          that.stage.update(e);
        }
      }
    }// end createBlueLeftTaps

    createBlueRightTaps(speed=100){
        const that = this;
        let blueRightTap = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["b" /* TaikoBlue */])(295, 0);
        that.currentRowRight.push(blueRightTap);
        that.stage.addChild(blueRightTap);
        createjs.Ticker.on("tick", tick);
        function tick(e){
          blueRightTap.y += e.delta/1000*speed;
          if (that.currentRowRight.length !== 0 &&
              that.currentRowRight[0].y > 600) {
            that.removeTap(that.currentRowRight);
            that.missed -= 1;
            that.updateScore();
            if (that.missed < 1) {
              that.stop();
              that.myScore();
            }
          } else {
            that.stage.update();
          }
        }
      }//end createBlueRightTaps

    hitMessage(x,y){
      this.score += 100;
      this.updateScore();
      let [text, textFill] = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["e" /* hitMessages */])(x,y);
      this.stage.addChild(text, textFill);
      this.stage.update();
      setTimeout(() => {
        this.stage.removeChild(text, textFill);
        text.clear;
        textFill.clear;
      }, 400);
    } //end hitMessage

    missMessage(x, y) {
      this.missed -= 1;
      if (this.missed < 1) {
        this.stop();
        this.myScore();
      }
      let [text, textFill] = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["f" /* missMessages */])(x, y);
      this.stage.addChild(text, textFill);
      this.stage.update();
      setTimeout(() => {
        this.stage.removeChild(text, textFill);
        text.clear;
        textFill.clear;
      }, 400);
    }

    stop(){
      this.updateScore();
      this.myScore();
      this.currentRowLeft = [];
      this.currentRowMid = [];
      this.currentRowRight = [];
      this.bgm.pause();
      this.pause = true;
      clearInterval(this.redInt);
      clearInterval(this.blueIntLeft);
      clearInterval(this.blueIntRight);
    } // end stop

    reset(){
      this.clearScore();
      this.currentRowLeft = [];
      this.currentRowMid = [];
      this.currentRowRight = [];
      this.score = 0;
      this.missed = 40;
      this.pause = true;
      clearInterval(this.redInt);
      clearInterval(this.blueIntLeft);
      clearInterval(this.blueIntRight);
      if (this.bgm) {
        this.bgm.pause;
      }
    } // end reset

    updateScore() {
      let score = document.getElementById("my-score");
      let miss = document.getElementById("my-miss");
      score.innerHTML = this.score;
      miss.innerHTML = this.missed;
    }

    clearScore(){
      let score = document.getElementById("my-score");
      let miss = document.getElementById("my-miss");
      score.innerHTML = 0;
      miss.innerHTML = 40;
    }

    myScore() {
      let [gameOver, yourScore, finalScore] = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["g" /* showScore */])(this.score);
      this.stage.addChild(gameOver, yourScore, finalScore);
      this.stage.update();
      document.addEventListener("click", () => {
        this.stage.removeChild(gameOver, yourScore, finalScore);
      });
    }
} //end Game

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* global createjs */

const ConanTheme = () => {
  let conan = new Audio('assets/sounds/conanTheme.mp3');
  return conan;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = ConanTheme;


const WilliamOverture = () => {
  let william = new Audio('assets/sounds/williamOverture.mp3');
  return william;
};
/* harmony export (immutable) */ __webpack_exports__["e"] = WilliamOverture;


const Don = () => {
  let don = new Audio('assets/sounds/don.mp3');
  return don;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = Don;


const DonDon = () => {
  let dondon = new Audio ('assets/sounds/don2.mp3');
  return dondon;
};
/* unused harmony export DonDon */


const Ka = () => {
  let kak = new Audio ('assets/sounds/kak.mp3');
  return kak;
};
/* harmony export (immutable) */ __webpack_exports__["c"] = Ka;


const Soysauce = () => {
  let soysauce = new Audio ('assets/sounds/soysauce.mp3');
  return soysauce;
};
/* harmony export (immutable) */ __webpack_exports__["d"] = Soysauce;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map