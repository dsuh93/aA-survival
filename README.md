# aA-survival

# Background
aA Survival is a classic game of items dropping and you either avoid them or catch them.
The theme is a retro 16-bit style where an App Academy student tries to get the highest score in the time limit.
The player needs to catch falling items and avoid others in order to get/protect points.
Much like the real App Academy, the player also only has three 'fails' before game over.
Player has to get the highest score possible in the time limit of 2 minutes.
Items that are included are:
  - Good items:
    - coffee: adds 3 seconds to the timer
    - attendance: +5 points
    - github: +5 points
    - kahoot: +10 points
    - exams(with A): +20 points (failure to catch means losing one life)
    - sleep: +5 points
  - Bad items:
    - games: -5 points
    - exams(with F): -20 points (catching this means losing one life)
    - missing report: -5 points
    - recursion: -5 points
    - broken computer: -10 points
    
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
This project will be using the following technologies:
  - Javascript for game logic
  - Canvas for drawing the game interface as well as all of the items in it
  - HTML and CSS for structure and design
 
The scripts that will be used in this game include:
  - the entry file
  - `game.js`: handles the logic for when items fall and how fast they fall
  - `player.js`: handles rendering and animation and controls of the game sprite
  - `items.js`: handles logic behind all of the various items in the game that influence point system and clock
  - `score.js`: handles logic behind how the score and timing goes when items are picked up by player
 
# Implementation Timeline

**Day 1**: setup all files and directories and make sure a game is able to render on the browser.

  Goals for the day:
  - make sure the skeleton for the board, the player, and all of the items are done
  - get webpack up and running
  - research how to render the items randomly and how to make them fall
  - build out all necessary html and canvas skeletons
  - research how to add audio
  
**Day 2**: build out the game sprite and get it to move with the key controls.

  Goals for the day:
   - get the sprite to move, making sure the velocity for each move is the desired amount.
   - figure out how to make items collide with the player and make each change to the score respectively
   
**Day 3**: Finish up game logic so that the difficulty increases based on each exam picked up by player

  Goals for the day:
  - get the start, pause, and game over functionality done
  - add logic to increment difficulty levels by number of items and change in velocity of falling items
  - make sure I can get a working game
  - try and get audio toggle to work
  
**Day 4**: CSS and stying

  Goals for the day:
  - get all the canvas art done, making it look clean and look presentable
  - add the modal for the title screen and navlinks for github and linkedin
  - make sure the final product works smoothly, set up live link if not already

#Bonus features
  - getting sound effects for each interaction player has with an item
   
