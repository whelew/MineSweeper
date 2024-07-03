# **Mine Sweeper - Using HTML and JavaScript**

Mine Sweeper, this website is a fully functional version of the original Mine Sweeper game from 1990. Using a mixture of JavaScript functions, HTML and CSS to create the game.

This website was used to demonstrate the power of JavaScript functions whilst also providing a fully function version of the game Mine Sweeper.

# Table of Contents

## [Design](#design-1)

- [Menu Screen](#menu-screen)
- [Game Board](#game-board)
- [Leader Board](#leader-board)

## **Design**

The design of the web page would be very simple. Originally the menu screen was to include 3 buttons for difficulty selection and a button linking you to the leaderboards. 

### Menu Screen

The original menu screen, 4 buttons 3 of which would open a game board of varying sizes depending on difficulty.

Using this wireframe I precreated some function names I would need:
- loadBoard(); (Easy, Normal, Hard); // Load the board depending on difficulty.
- loadLBoard(); //Load the Leader Board.

![Wireframe of original Menu Screen](/assets/images/menuscreen.png)

### Game Board

The game board was a difficult process to create however the basic model of it on the webpage was very simple. It needed the Mine Sweeper header, Flag Counter and Timer, and the actual Game Board.

Using this wireframe here are the list of functions I prenamed: 
- runGame();
- populateGameBoard(); // This became the runGame and createBoard function
- incrementFlags();
- leftClickTiles(); //This became markTiles();
- checkTiles();
- restartGame();
- createBoard();

![Wireframe of original Game Board](/assets/images/gameboard.png)

### Leader Board

The Leader Board would show the results of the players final score, this would be based off of their time taken to complete the level.

Here are the list of functions I prenamed:
- updateLeaderBoard() //This would update the players score and push it into the leaderboard
- returnToMainMenu() //User returns to main menu