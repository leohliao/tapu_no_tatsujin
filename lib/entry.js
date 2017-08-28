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
