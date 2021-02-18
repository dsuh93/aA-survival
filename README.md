# aA-survival

![game-play](https://github.com/dsuh93/aA-survival/blob/main/src/images/AAsurvivalgif.gif)

# Background
aA Survival is a classic game of items dropping and you either avoid them or catch them.
The theme is a retro 16-bit style where an App Academy student tries to get the highest score while staying alive.
The player needs to catch falling items and avoid others in order to get/protect points.
Much like the real App Academy, the player also only has three 'fails' before game over.

Items that are included are:
  - Good items:
    - coffee: +5 points
    - github: +5 points
    - kahoot: +5 points
    - exams: +10 points
    - croissant: +5 points
  - Bad items:
    - tv: -5 points
    - error: -5 points
    - hacker: -1 life
    
Game difficulty will be incremented via number of items and speed at which they fall.
Difficulty rises with each exam that the player catches.

# Functionality & MVP
Users will be able to:
  - start, pause, and exit game (pause will be on the space bar)
  - choose difficulty between easy, normal, and hard
  - move character using W, S, D for jump, left, and right
  - toggle music on and off
This project will also include:
  - an about to explain rules of the game
  - links to github/linkedin
  - a production README

# Wireframes
This app will exist on a single screen. The landing page will include the title of the game, and external links to github and linkedin.
There will also be a toggle for music and level difficulty, and a button to display instructions and a button to start the game.
The controls for moving the character will be key strokes of W, A, and D, which will have the sprite jump, move left, and move right respectively.
User can also hit spacebar to pause the game. 
![wireframe](https://github.com/dsuh93/aA-survival/blob/main/src/images/wireframe.PNG)

# Architecture and Technologies
This project implements the following technologies:
  - Javascript for game logic
  - Canvas for drawing the game interface as well as all of the items in it
  - HTML and CSS for structure and styling

#Credits
  - item sprites were courtesy of VECTORPIXELSTAR: [link](https://vectorpixelstar.itch.io/mega-pixel-art-32x32-px-icons-sprite-sheet)
   
