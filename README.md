

# The Master of Tap (Tapu no Tatsujin)
[LIVE](https://leohliao.github.io/tapu_no_tatsujin/index.html)

## History

The Master of Tap is a web game inspired by the famous arcade game, "Taiko no Tatsujin". Taiko no Tatsujin, which literally means the Taiko Master, is a game where players simulate playing a Taiko drum in time with music.

This replication game will be structured with 3 empty (circle) on the bottom corner of the screen. Then once the game starts, player will see beats (represent in circles) scrolling across the screen.  As these beats reaches to indicated area, the player must tap the key at the right timing in order to receive scores. Please note that all the illustrations and music used in this project are copyrighted material that belongs to "Taiko no Tatsujin".


## Functionality and MVP

![GIF](https://user-images.githubusercontent.com/25352090/28979723-b8b81824-78ff-11e7-8192-5e8b6622b1f5.gif)

Players are able to perform the following actions:
  * start and pause the game.
  * choose a level of difficulty.
  * see their scores.
  * user the valid keyboards to receive points.
  * ability to mute music.

Games interface includes:
  * music.
  * keyboards display and rules of play.
  * keyboard for pressing.


## Wireframes

![title](https://user-images.githubusercontent.com/25352090/28978222-fdf025e0-78f9-11e7-9516-da349db0cc6c.png)

The game consist of a single screen split into three sections:
* Section One will be displaying the rules of how to play the game; levels of selection and music control panel.
* Section Two will be the gaming area, where beats (represent in circles) will scroll from the top of the screen to the bottom. Once the beats reach to the bottom space, player must tap the keyboard in order to receive the points.
* Section Three will be the score board, game control and control keyboard reference.


## Architecture and Technologies

  * Vanilla JavaScript for overall structure of the game.
  * Easel.js with HTML5 Canvas for DOM manipulation and rendering.
  * Webpack bundle to incorporate multiple files.


## Coding Style

  * Due to time concern, the current pattern for tap generator is random.
  However, with the current style of setInterval, the time is fixed the first time when we called the function and thus we cannot achieve varieties of taps falling pattern.  However, this problem was solved after implementing a setTimeout function inside the setInterval:

  ```js

  if (difficulties === "beginner") {
      this.speed = 120;
      this.music(ConanTheme());
      max = 1800;
      min = 900;
    }
    // code ...

  this.redInt = setInterval( function() {
    let intervalOne = this.createInterval(max, min);
    setTimeout(function(){this.createRedTaps(this.speed);}.bind(this), intervalOne);
  }.bind(this), 800 );

  ```

  This code will call my setTimeout function at frequent of 800 mms (this number varies),
  where my setTimeout will be activated after certain amount of time created by "createInterval" function, where its max and min are defined according to the level of difficulties that the user's choices.

  * Randomized Hitting Messages and Missed Messages:
  In order to achieve the optimum effect of randomized these messages,
  I passed in max and min each time when I have to generate these messages:

  ```js
  // code ...

  if (this.currentRowMid[0] &&
      this.currentRowMid[0].y > 510 &&
      this.currentRowMid[0].y < 540) {
    this.removeTap(this.currentRowMid);
    this.hitMessage(130, 200);
  }

  // code ...
  export const hitMessages = (x, y) => {
    const messageContainer = ["Great!", "Fantastic!", "Amazing!",
        "Good!", "Perfect!", "Hit!"];
    let messages = messageContainer[Math.floor( Math.random()
        * messageContainer.length)];
    // code ...
    text.x = Math.floor(Math.random() * (y - x))+ x;
    text.y = Math.floor(Math.random() * (500-435)) + 435;
    // code ...
  };

  ```

## Future Direction

  - Taps are generated according to actual audio songs.
  - More music choices.
  - Multi-player mode.
