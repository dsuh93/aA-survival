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
