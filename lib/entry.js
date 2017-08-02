/* global createjs */
import viewPort from './view_port';
import Game from './game';

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById('gameCanvas');
  const stage = new createjs.Stage(canvas); //similar to getElementById

  const view = new viewPort(stage);
    view.render();
    stage.update();

  const game = new Game(stage);
    game.play();


}); // end EventListener
