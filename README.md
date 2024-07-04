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

## [LightHouse Test](#light-hosue-test)

- [Index HTML](#index-html)
- [Score HTML](#score-html)
- [Instructions HTML](#instructions-html)

## [Testing](#testing-1)

- [JS Validator](#java-script-validator)
- [HTML Validator](#html-validator)
- [CSS Validator](#css-validator)
- [Function Tests](#function-tests)

## [Bugs and Debugging](#bugs-and-debugging-1)

- [Unresolved Bugs](#unresolved-bugs)
- [Resolved Bugs](#resolved-bugs)

## [Future Implementations](#future-implementations-1)

- [Leader Board](#leader-board-1)
- [Game Music](#game-music)
- [Theme Selector](#theme-selector)

## [Deployment and Cloning](#deployment-and-cloning-1)

- [Deployment](#deployment)
- [Cloning](#cloning)

## [Technologies](#technologies-used)




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

- Gets timer element by id "timer".
- Declares second variable of get element by id "timer", however uses parseInt to get a number value.
- It then sets the innerText of original timer element to, number value + 1. 

#### startTimer()

This function calls the incrementTimer function.

- If timerInterval is not already defined, falsy.
- If no timer is running, it uses a setInterval JavaScript function to call the incrementTimer function. (setInterval(incrementTimer,1000))
- The 1000 refers to 1000 milliseconds and therefore, 1 second.
- IncrementTimer will therefore increment current time by a value of 1 every second.

#### stopTimer()

This function stops the timer.

- If timerInterval is truthy, it will log the value of the timerInterval.
- It will clearInterval to stop previous incrementTimer function being called again.
- Set timerInterval back to 0; 

### Setting up the Score:

#### calculateScore()

This function takes the value of the current timer and sets the innerText of the element with id of "score-value" to this value.

- Sets score value to timer value.
- Adds event listener to the submitBtn which calls submitScore function.

#### submitScore()

This function stores user name and user score to local storage.

- Declares variables by element id.
- Stores these variables into localStorage using JavaScript function setItem().
- It then calls loadLBoard function, loading up the leader board html page.

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

## **Light Hosue Test**

Each html page had an individual light house test. 

- Each page had 100% good performance, accessibility, best practices. 
- The instructions html had 96% for best practices.
- Each reported 90% for SEO. 
- I will improve the meta data to improve on this.

### Index HTML

![Screen Shot of Light House Test on index.html](/assets/images/indexHTML.png)

### Score HTML

![Screen Shot of Light House Test on index.html](/assets/images/scoreHTML.png)

### Instructions HTML

![Screen Shot of Light House Test on instructions.html](/assets/images/howToPlay.png)

## **Testing**

### Java Script Validator

- Using [JSHint](https://jshint.com/) I tested my script.js and my leaderBoard.js.

- The results for my leaderBoard.js showed no signs of any errors.

![Screen shot of JSHint for leaderBoard.js](/assets/images/leaderBoard.js.png)

- The results for my script.js came back positive except for 3 warnings.
- 3 Functions declared within loops reference an outer scoped variable ("mines").
- This may lead to confusing semantics. However the functionality works fine and the game runs as it should.

![Screen shot of JSHint for script.js](/assets/images/script.js.png)

### HTML Validator 

- Tested all HTML pages using [W3C Validator](https://validator.w3.org/).
- All pages passed withour error.

![Screen shot of index.html](/assets/images/index.html.valid.png)

![Screen shot of score.html](/assets/images/score.html.valid.png)

![Screen shot of instructions.html](/assets/images/instructions.html.valid.png)

### CSS Validator

- Tested CSS using [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)

- The CSS I left till the end of the project, if I wanted to change the game board size, all I needed to do was adjust the game boards actualy width and the game board divs depending on which media query it was for. 
- A mobile screen with a width of 480px might have a game board of width 460px and game board divs with width and height of 23px. 

![Screen shot of succesful CSS Validator test](/assets/images/CSS%20Validator.png)

### Function Tests

|Function  |Test      |Outcome	|
|:-------:|:--------:|:--------:|
|Reveal Tile |Left Click On a Tile |Tile is revealed to either be a safe tile or a mine tile.|
|Reveal Other Tiles| Left Click On a Safe Tile |After tile is revealed and has no mines around it, it will reveal those tiles as well. This function will repeat until number tiles are found.|
|Mark Tile |Right Click on a Tile |If you right click on a tile it will place a flag image to mark that spot with a flag. This lets the player note down which spots they believe have mines in them.|
|Reveal All Mines |Left click a Mine Tile |Left clicking a mine tile will reveal that tile as a mine and all other mine tiles will be revealed.|
|Remove All Flags |Left click on a Mine Tile | When all mines are revealed, if those tiles initally had been marked by a flag, the flag would be removed and replaced by a mine. |
|Load Board |Clicking Easy, Normal or Hard |This will load a board of either 8x8, 12x12, 12x20 depending on the difficulty.|
|Populate Game Board| Clicking Difficulty |This will populate the game board with divs known as tiles and set them all ids.|
|Set Mine Id |When Game Board Loads |Mine ids will have been randomly generated then matched to a specific tile on the newly generated game board.|
|Load Game Over Display |Lose the Game |When a player loses the game a new child of the body will appear telling the player the game is over, it includes 3 buttons allowing them to either restart, load main menu or visit the leaderboard.|
|Load Win Menu Display |Win the Game |When a player wins the game a new child of the body will appear telling the player they won the game, what their score is and provide them with a name input and a submit score button.|
|Update Leader Board | Click Submit Score |When submit score is clicked it will transfer the user to the leaderboard page and upload their time as a score. The leader board will then update the leaderboard and put the quickest time at the top and the slowest time at the bottom. |



## **Bugs and Debugging**

### Unresolved Bugs

- There are a few bugs that need patching up which I would like to do when I have more time.

#### Game Board Size - Media Queries

- The main issue is adjusting all the media queries correctly for mobile screen sizes. 
- Ideally I would like to make my hard game mode longer in height and shorter in width, this would help the game adapt to the width and height of a mobile screen. 
- This would mean that I would need to adjust all the arguments for the functions themself which might get complicated this late in development, this is something I should have considered earlier on. 
- It would be simple enough to implement, however this close to my deadline I would need more time to make sure I did not change anything integral to the rest of the site.

#### Left Clicking a Flag Tile

- You are still able to left click a flag tile and the tile itself will be revealed.
- However I have used a slight defence mechanism where the actual image itself can not be clicked therefore unless the player clicks the tiny gap inbetween the image and the border of the div, left click will not work.
- Before it would automically reveal the tile when you clicked on the flag image so I have been able to manage this issue.
- The reveal would also not work correctly, and the tile itself would not actually reveal if the tile was safe or had a mine, but after adding my bug fix it now reveals the tile if the user does so happen to click the tile.

### Resolved Bugs

#### Mines not removing Flag Image

- The mines now remove all flag images on a mine tile when all mines are revealed.
- Before this my funciton would cause the mines to remove the first flag image on a mine tile but not the rest.
- It was not looping through the mine tile array properly, therefore a while loop was needed. 
- As long as the length of flagTiles was greater than 0 on a mine tile it would continue to loop.

#### Being able to click after the game has finished

- The left and right click both continued to work after gameOver or winGame had been called.
- To combat this, I created a disableListener function to be called when the previous functions had been called.
- This means that while the tiles themselves are still active, they have no active listener to active the functions. 


## **Future Implementations**

### Leader Board

#### New Column

- The leader board is missing one column, the level difficulty.
- This would be useful as only players times are being recorded, meaning that a player might get a time of 300 and be bottom of the leaderboard, however they did this time on the hard board. 
- I would most likely add a new columm or have 3 seperate leaderboards all together.
- This would later develop into the leaderboard html having 4 tabs, "Easy", "Normal", "Hard" and "Global". 
- Global would include all 3 difficulties. 

#### Database

- The leaderboard does update the players score on victory to the leaderboard, however this is only in local storage.
- If the player refreshes the page this score will be lost.
- I would like to be able to develop a data base so every users score can be saved and compared against other competitors.
- I would then be able to extend the length of my leaderboard as well as it having global scores rather than only local based ones.

### Game Music

- I would like to be able to add a music player that the user can choose to turn on and off and adjust the volume manually. 
- I have done a masters in video game composition and would like to compose the music myself as this would be a great reference for personal work.

### Theme Selector

- A theme selector would be a very fun feature to add.
- It would be easy enough to implement, however take some time making sure the function targeted every element correctly and changed their classes accordingly.
- The theme selector would then change the elements class, and these classes would have their own CSS.
- I would be able to include the original Mine Sweeper Theme (a variation of grays).
- Alongside many others, forest themed, space themed, fire, water, in the sky, etc. 

## **Deployment and Cloning**

### Deployment

- I deployed my site to [Github](https://github.com/).
1. First go on to your github repository page.
2. Then go to the settings tab.
3. In the settings tab go to the pages tab on the side menu.
4. Ensure that the source is "Deploy from a branch"
5. Then make sure the Branch is set to "Main" and the folder selected is the "root" folder.
6. After this click save and this will deploy a live version of the website.

Live site can be found here: https://whelew.github.io/MineSweeper/instructions.html

### Cloning

- Instructions to clone: 

1. Follow Link: https://github.com/whelew/MineSweeper.
2. Click on the green code button. 
3. Copy the HTTPS URL or Github CLI link. 
4. Open Git Bash. 
5. Change your current working directory to the location where you want the clone directory.
6. Type git clone, followed by the URL you copied. 
7. Press enter to create your local clone.

## **Technologies Used**

- HTML5
- CSS - Cascading Style Sheet used to style the website.
- Java Script - Uses 30 functions in script.js to generate game board and all game rules and functionality.
- VS Code - The main IDE that I used. 
- W3schools - For quick and useful information when trying to problem solve when writing with HTML and CSS.
- JSHint - To check over my JS code.