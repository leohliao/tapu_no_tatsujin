/* global createjs */
import View from './view';
import Game from './game';
//test
import { TaikoRed, TaikoBlue, TaikoGold, Fireworks,} from './tap';

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById('gameCanvas');
  const stage = new createjs.Stage(canvas); //similar to getElementById
  const view = new View(stage);
  const game = new Game(stage);

  view.render();
  stage.update();

  document.addEventListener("keydown", (e) => {
    // e.preventDefault();
    switch (e.keyCode){
      case 32:
        game.tapRed();
        break;
      case 67:
        game.tapBlueLeft();
        break;
      case 77:
        game.tapBlueRight();
        break;
    }
  }); // end keydown

  document.getElementById("level-beginner")
          .addEventListener();
//test
  game.play();

  // let text = new createjs.Text();
  // text.font = "20px Luckiest Guy";
  // text.color = "white";
  // text.text = "Fantastic!";
  // text.x = 290;
  // text.y = 490;
  // text.outline = 3;

  //
  // let textFill = text.clone();
  // textFill.outline = false;
  // textFill.color = "red";
  //
  // stage.addChild(text, textFill);
  // stage.update();
  // const taikoBlue = TaikoBlue();
  // const taikoRed = TaikoRed();
  // const fireworks = Fireworks();
  // const taikoGold = TaikoGold();
  //
  // taikoGold.image.onload = function () {
  //   stage.update();
  // };
  //
  //  stage.addChild(taikoGold);
  //  stage.addChild(fireworks);
  //  stage.addChild(taikoRed);
  //  stage.addChild(taikoBlue); // must call if you want to put something.
  // //  stage.update();  //update our stage to dsiplay the shape we added

}); // end EventListener
// 32 space
// 67 c
// 77 m

//text range x = 0 ~ 50;
//text range x = 130 ~ 150;
//text range x = 250 ~ 290
//text range y = 465 ~ 490


// const taikoRed = new createjs.Bitmap("assets/images/taiko_red.png");
//  taikoRed.x = 175;
//  taikoRed.y = 525;
//  taikoRed.scaleX = taikoRed.scaleY = 0.5;
//
//  const taikoBlueLeft = new createjs.Bitmap("assets/images/taiko_blue.png");
//   taikoBlueLeft.x = 55;
//   taikoBlueLeft.y = 525;
//   taikoBlueLeft.scaleX = taikoBlueLeft.scaleY = 0.5;
//
//   const taikoBlueRight = new createjs.Bitmap("assets/images/taiko_blue.png");
//    taikoBlueRight.x = 295;
//    taikoBlueRight.y = 525;
//    taikoBlueRight.scaleX = taikoBlueRight.scaleY = 0.5;
//
//    taikoBlueRight.image.onload = function() {
//      stage.update();
//    }; // image won't load unless you call this onload function
//
//   taikoBlueLeft.image.onload = function() {
//     stage.update();
//   }; // image won't load unless you call this onload function
//
//  taikoRed.image.onload = function() {
//    stage.update();
//  }; // image won't load unless you call this onload function
//
//  stage.addChild(taikoBlueRight);
//  stage.addChild(taikoBlueLeft);
//  stage.addChild(taikoRed); // must call if you want to put something.
// //  stage.update();  //update our stage to dsiplay the shape we added
