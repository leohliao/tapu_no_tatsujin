

# The Master of Tap (Tapu no Tatsujin)
[LIVE](https://leohliao.github.io/tapu_no_tatsujin/index.html)

## History

The Master of Tap is a web game inspired by the famous arcade game, "Taiko no Tatsujin". Taiko no Tatsujin, which literally means the Taiko Master, is a game where players simulate playing a Taiko drum in time with music.

This replication game will be structured with 2 empty (circle) on each corner of the screen. Then once the game starts, player will see beats (represent in circles) scrolling across the screen.  As these beats reaches to indicated area, the player must tap the key at the right timing in order to receive scores.  


## Functionality and MVP

![GIF](https://gyazo.com/d923f0eb3d05f367a93f68c8d347d059)

Players will be able to perform the following actions:
  * start and pause the game.
  * choose a level of difficulty.
  * see their scores.
  * user the valid keyboards to receive points.
  * ability to mute music.

![title](https://user-images.githubusercontent.com/25352090/28978222-fdf025e0-78f9-11e7-9516-da349db0cc6c.png)

Games Interface will include:
  * music.
  * keyboards display and rules of play.


## Wireframes

The game will be consist of a single screen split into three sections.  
Section One will be displaying the rules of how to game the game.
Section Two will be the gaming area, where beats (represent in circles) will scroll from the top of the screen to the bottom. Once the beats reach to the bottom space, player must tap the keyboard in order to receive the points.

![wireframes](tapu_no_tatsujin.png)

## Architecture and Technologies
  * Vanilla JavaScript for overall structure of the game.
  * Easel.js with HTML5 Canvas for DOM manipulation and rendering.
  * Webpack bundle to incorporate multiple files.

## Coding Style


## Future Direction

  - More music choices.
  - Multi-player mode.
