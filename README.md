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
- [Number Colors](#number-colors)

## [Functions](#functions-1)

- [Generating The Board](#generating-the-board)
- [Generating The Mines](#generating-the-mines)

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
1 = Blue
2 = Green
3 = Red 
4 = Dark Blue
5 = Brown 
6 = Cyan
7 = Black
8 = Grey

![Original Number Color Scheme](/assets/images/originalMSColor.png)

- For my design I needed to change this as the contrast would not match my chosen color scheme. It also would have caused difficulty reading the number.
- The colors vary less, and instead get darker as the number increases.  

Here is my chosen color list:
1 = Gold 
2 = Orange
3 = Dark Orange 
4 = Tangelo
5 = Tomato
6 = Indian Red
7 = Auburn
8 = Maroon

![New Number Color Scheme](/assets/images/newNumberColors.png)

## **Functions**

### Generating The Board

Initially I was going to create 3 seperate html pages for each board, however I had learned during my course you could use back ticks `` alongside .innerhtml to change a current elements inner html. For future implementation, creating 3 seperate html pages would have been a lot simpler to implement as there were more functions than anticipated and trying to target the correct id or class became difficult at times as I had to use query selectors and for loops many times.

#### loadBoard(event);

- The loadBoard function changes the current innerHtml content of the div with class="board" and id="menu". It creates a new menu button, a flag counter, timer and a div with class="game-board". The id of the board is determinded by a switch statement, depending on which menu button was hit, it will check through the cases, and whether the id was "easy", "normal" or "hard" will generate a board with that specific id. 
- The loadBoard function also contains several other functions, one being populateGameBoard. 

#### populateGameBoard(rows, columns, boardId);

- The populateGameBoard function, creates a series of divs, all with a specific id that is stored in an array called board. For example, [{0, 0}, {0, 1}, {0, 2}] all the way up to {7,7} for a board with id="easy". It uses two for loops to create rows and columns with specific ids. It also adds event listeners to the divs themselves, one for ("click", revealTile) and ("contextmenu", markTile) left click and right click. 

### Generating The Mines

#### setMines(numMines, rows, columns);

#### setMineId()

### revealTile(event)

### disableListener()

### revealAllMines()

### removeAllFlags()

### markTile(event)

### checkTile(row, col)

### revealOtherTiles (row, col)

### checkNum()

### gameOver()

### winGame()

### restartGame()

### incrementTimer()

### startTimer()

### stopTimer()

### loadInst()

### loadLBoard()

### loadMainMenu()

### displayWinMenu()

### calculateScore()

### submitScore()