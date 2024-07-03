# **Mine Sweeper - Using HTML and JavaScript**

Mine Sweeper, this website is a fully functional version of the original Mine Sweeper game from 1990. Using a mixture of JavaScript functions, HTML and CSS to create the game.

This website was used to demonstrate the power of JavaScript functions whilst also providing a fully function version of the game Mine Sweeper.

# Table of Contents

## [Design](#design-1)

- [Menu Screen](#menu-screen)
- [Game Board](#game-board)
- [Leader Board](#leader-board)

## [Color Scheme](#color-scheme-1)

- [Color Charts](#color-charts)
- [Number Colors]()

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

![Wireframe of original Leader Board](/assets/images/leaderboard.png)

## **Color Scheme**

### Color Charts

- The color scheme went through a few changes, originally I used the original 1990 color scheme whilst creating the game knowing I would later implement my own color scheme.

![Original Mine Sweeper Color Scheme](/assets/images/originalMSColor.png)

- I really liked the old minesweeper color scheme, however I wanted to make a more original design so I went with this color scheme (image below).

![Screen Shot of Current Color Scheme](/assets/images/mineSweeperColorScheme.png)

This color scheme works really well, the board tiles are clearly marked and it is easy to distinguish whether a tile has been revealed or not. 

### Number Colors

The color of the numbers of the original game change color depending on what number is shown:
- 1 = Blue
- 2 = Green
- 3 = Red 
- 4 = Dark Blue
- 5 = Brown 
- 6 = Cyan
- 7 = Black
- 8 = Grey

![Original Number Color Scheme](/assets/images/originalMSColor.png)

- For my design I needed to change this as the contrast would not match my chosen color scheme. It also would have caused difficulty reading the number.
- The colors vary less, and instead get darker as the number increases.  

Here is my chosen color list:
- 1 = Gold 
- 2 = Orange
- 3 = Dark Orange 
- 4 = Tangelo
- 5 = Tomato
- 6 = Indian Red
- 7 = Auburn
- 8 = Maroon

![New Number Color Scheme](/assets/images/newNumberColors.png)

