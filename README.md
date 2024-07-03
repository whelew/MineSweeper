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
- [Revealing The Tiles](#revealing-the-tiles)
- [Adding The Flags](#adding-the-flags)
- [Win, GameOver, Restart!](#win-gameover-restart)
- [Setting Up The Timer](#setting-up-the-timer)
- [Setting up The Score](#setting-up-the-score)
- [Loading Pages](#loading-pages)
- [Extra Functions](#extra-functions)

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

### Generating The Board:

Initially I was going to create 3 seperate html pages for each board, however I had learned during my course you could use back ticks `` alongside .innerhtml to change a current elements inner html. For future implementation, creating 3 seperate html pages would have been a lot simpler to implement as there were more functions than anticipated and trying to target the correct id or class became difficult at times as I had to use query selectors and for loops many times.

#### loadBoard(event);

- The loadBoard function changes the current innerHtml content of the div with class="board" and id="menu". It creates a new menu button, a flag counter, timer and a div with class="game-board". The id of the board is determinded by a switch statement, depending on which menu button was hit, it will check through the cases, and whether the id was "easy", "normal" or "hard" will generate a board with that specific id. 
- The loadBoard function also contains several other functions, one being populateGameBoard. 

#### populateGameBoard(rows, columns, boardId);

- The populateGameBoard function, creates a series of divs, all with a specific id that is stored in an array called board. For example, [{0, 0}, {0, 1}, {0, 2}] all the way up to {7,7} for a board with id="easy". It uses two for loops to create rows and columns with specific ids. It also adds event listeners to the divs themselves, one for ("click", revealTile) and ("contextmenu", markTile) left click and right click. The arguments rows, columns and boardID are declared inside of the loadBoard function:
- Easy (8, 8, "easy-board")
- Normal (12, 12, "normal-board")
- hard (12, 20, "hard-board")

### Generating The Mines:

#### setMines(numMines, rows, columns);

- This function declares the number of Mines = numMines, and also uses rows and columns to justify there location.
- Easy (10, 8, 8,)
- Normal (30, 12, 12)
- hard (50, 12, 20,)

- Inside the function it uses a Math.floor(Math.random()) method multiplied by either the rows or columns argument. It then sets the location as an array which will then later be used to identify which tile has a mine using the setMineId function.

#### setMineId()

- This function sets the Id of a div to id="mine-tile" depending on whether the tile Id and the random generated Id from setMines function match up. 
- It uses a for loop to cycle through the length of the game-tile class list, splits the id down the middle by the previously added "-" in the populate game board, turns the string into a number as a variable declared [row, col]. 
- An if statement is then used to check if the current tiles coordinates match any of the coordiantes in a predefined array Mines. 
- If a match is found it adds that tile to a classList of "mine-tile". 

### Revealing the Tiles:

#### revealTile(event)

This function contains alot of other functions, it contains several if statements which determine the state of the tile clicked.

- If the tile contains a flag or a mine has been pressed it will return, stopping the player from being able to click the tiles after the game is over. 
- This was needed because after the game had finished clicking on a mine tile again would cause another mine img to be pushed into the tile resulting in an unwanted feature.
- The second if statement checks if the tile contains a mine, if it does it will cause a series of other functions to occur. 
- Else it will then call the checkTile function, adding it to a revealed classList, whilst also calling the checkNum function.
- If the tile click detects no mines around it, it will then call the revealOtherTiles function. 

#### checkTile(row, col)

The checkTile function needed to be able to check the surronding tiles and whether they contained mines or not. To do this it used an array of arrays.

- The arrays: [[1, 1], [1, -1], [1, 0], [-1, 1], [-1, 0], [-1, -1], [0, 1], [0, -1],];
- The gameRow and gameColumn are declared without a value, the value is then determined by the current boards id.
- mineCount declares the current number of mines.
- The for loop then loops through each direction.
- If then checks whether the coordinates are in the board.
- The second if then checks if those tiles that are in the board contain a mine.
- If it does it will increment the mineCount.

#### revealOtherTiles (row, col)

This function is very similar to the checkTile function, the main difference is, it needs to check the tiles already checked. If the tiles checked are safe and empty it will then make those tiles check the tiles around them until a tile with a number is found.

- It uses the same arrays as the previous function, and also declares the same gameRow and gameColumn function.
- The first if statement works the same checking whether the coordinates are in the board.
- A variable tile is declared getting the element by id. 
- The second if statement however checks if the tiles around the tile clicked contain the class name of "revealed", if so, it will then automatically click these tiles.
- The click will then continue to call the reveal tile function until it reveals all safe tiles close by.

#### revealAllMines()

This function uses a for loop to loop through all game-tiles with the class "mine-tile". When a mine is clicked this function will be called.

- The function itself creates a new element (img).
- It sets thge src attribute.
- Sets the id.
- Adds it to the class "revealed-mine".
- Then appends an img of a mine as a child.
- So when a mine is clicked, all mines will be exposed.

### Adding The Flags:

#### markTile(event)

This function was originally named incrementFlag, however after creating the function, calling it markTile was more appropriate.

This tile prevents the default contextmenu function and instead replaces it with being able to append a flag image to the current tile using a right click on the mouse.

- It preventsDefault.
- It uses an if statement to detect whether the current tile ("this") contains a child. (this.querySelector("img") === null).
- If it does not contain a child it will append a flag image to that tile. 
- Else it will remove that child.
- Whilst doing so, the if will increment the flagCounter whilst the else will decrement the flagCounter.

#### removeAllFlags()

This function was designed after play testing the game and realising that when mines were revealed the flag would still remain on the mine tile causing a visual bug where both the mine image and the flag image were inside of one div.

A more suitable name would be removeAllFlagsFromMines, but this seemed too long.

- A variable is declared to get all tiles with class "mine-tile".
- A for loop is then used to iterate through the length of the mine tiles.
- A second variable is declared to get all elements with class name "flag-tile".
- The while loop will continue as long as there are flag elements present. 
- It will then remove that child from the mine tile. 

### Win, Gameover, Restart:

#### winGame()

This function checks to see if the number of revealed tiles is === to the number of safeTiles.

- The safeTiles variable value is decided by an if statement checking the boards id, it then sets the value to either, 54 for easy, 114 for normal and 174 for hard.
- The function is called on every left click of a tile.
- It uses an if statement to check safeTiles and revealedTiles are equal.
- If so it will run a series of other functions.

#### displayWinMenu()

This function creates a new element div. This div is then appended as a child of the body.

- The div is fileld with a new inner html using back ticks `` to declare all the elements inside the div.
- The div is then appended to as a child to the document.body.

#### gameOver()

This function includes what the dispalyWinMenu function does, but instead of calling it from a seperate function it is already contained inside the gameOver function.

- Creates div element with id of "game-over-menu".
- div.innerHTML is then set.
- It then appends the div as a child of the body.
- It declares 3 variables and adds 1 event listener to each of them.
- These are the restart, return to main menu and leader board buttons. 

#### restartGame()

This function gets all the elements by id of the game boards. It then uses those ids to call back the loadBoard(event).

- The event is declared as event = target: {id: "gameBoardId"}
- Depending on which id is declared, it will then call the loadBoard function.
- In affect it loads an entire new board hence restarting the game.
- All tiles will have been changed, mines spot will have moved. 
- It also uses an if statement to check whether the gameOverDisplay is on screen, if so, this will be removed. 


### Setting up the Timer:

#### incrementTimer()

#### startTimer()

#### stopTimer()

### Setting up the Score:

#### calculateScore()

#### submitScore()

### Loading Pages:

#### loadInst()

- This function uses window.location to load the instructions.html page.

#### loadLBoard()

- This function uses window.location to load the score.html page.

#### loadMainMenu()

- This function uses window.location to load the index.html page.

### Extra Functions:

#### disableListener()

This function is simply used to disable the EventListener("click", revealTile) and the EventListener("contextmenu", markTile).

- If a mine has been clicked this function will be called.
- If the user wins the game this function will be called.

#### checkNum()

This is one of my favourite functions. 

- It declares a variable with the value of the number value innerText of the current tile (innerNum = parseInt(this.innerText)).
- It then uses a series of if else statements to check the innerNum value against 1 - 8. 
- It will then add that tile to a class of "number-one" through to "number-eight".
- CSS will then change the innerText of the tiles color to a specific color for that class.

