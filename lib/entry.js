/* global createjs */

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById('gameCanvas');
  const stage = new createjs.Stage(canvas); //similar to getElementById

  // let circle = new createjs.Shape();
  // circle.graphics.beginFill("red").drawCircle(100, 100, 50);
  // stage.addChild(circle);
  // stage.update();

  // const shape = new createjs.Shape();
  // shape.graphics.beginFill('#99f');
  // shape.graphics.drawRect(0, 0, canvas.width, canvas.height);
  //
  // shape.graphics.beginFill('#33f');
  // shape.graphics.beginStroke('black');
  // shape.graphics.drawCircle(100, 100, 50);
  // stage.addChild(shape);
  // stage.update();

  const taikoRed = new createjs.Bitmap("assets/taiko_red.png");
  taikoRed.x = 100;
  taikoRed.y = 100;

  taikoRed.image.onload = function() {
    stage.update();
  }; // image won't load unless you call this onload function

  stage.addChild(taikoRed); // must call if you want to put something.
  stage.update();  //update our stage to dsiplay the shape we added

}); // end EventListener
