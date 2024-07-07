const levelSelect = document.getElementById("menu");
levelSelect.addEventListener("click", loadBoard);

//insert game board after clicking on difficulty button
function loadBoard(event) {
    
    switch (event.target.id) {
        case "easy":
            levelSelect.innerHTML = `
            <button class="menu-button" id="return-btn">Main Menu</button>
            <br>
            <p class="flag-counter"><img src="assets/images/flag.png">Flags Remaining:<span id="count">10</span>
            Timer:<span id="timer">0</span></p>
            <div class="game-board" id="easy-board"></div>
            `;
            populateGameBoard(8, 8, "easy-board");
            setMines(10, 8, 8);
            setMineId();
            startTimer();
            break;
        case "normal":
            levelSelect.innerHTML = `
            <button class="menu-button" id="return-btn">Main Menu</button>
            <br>
            <p class="flag-counter"><img src="assets/images/flag.png">Flags Remaining:<span id="count">30</span>
            Timer:<span id="timer">0</span></p>
            <div class="game-board" id="normal-board"></div>
            `;
            populateGameBoard(12, 12, "normal-board");
            setMines(30, 12, 12);
            setMineId();
            startTimer();
            break; 
        case "hard":
            levelSelect.innerHTML = `
            <button class="menu-button" id="return-btn">Main Menu</button>
            <br>
            <p class="flag-counter"><img src="assets/images/flag.png">Flags Remaining:<span id="count">50</span>
            Timer:<span id="timer">0</span></p>
            <div class="game-board" id="hard-board"></div>
            `;
            populateGameBoard(12, 20, "hard-board");
            setMines(50, 12, 20);
            setMineId();
            startTimer();
            break;
        case "leader-board":
            loadLeaderBoard();
            break;
        case "instructions":
            loadInst();
            break;
    }

    let mainMenu = document.getElementById("return-btn");
    mainMenu.addEventListener("click", loadMainMenu);
}

//populates easy game board with tiles
function populateGameBoard(rows, columns, boardId) {
    var board = [];

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.className = "game-tile";
            tile.addEventListener("contextmenu", markTile);
            tile.addEventListener("click", revealTile);
            document.getElementById(boardId).append(tile);
            row.push(tile);
        }
        board.push(row);
    }
    console.log(board);    
}

let mines = [];
// pushes a number of coordinates into an array
function setMines(numMines, rows, columns) {
    mines = []; //resets array
    
    for (let i = 0; i < numMines; i++) {
        let x = Math.floor(Math.random() * rows);
        let y = Math.floor(Math.random() * columns);
        let location = [x, y];
        if (!mines.some(mine => mine[0] === x && mine[1] === y)) { //avoid duplicate mines
            mines.push(location);   
        } else {
            i--;
        }
    }
    console.log(mines);
}

//sets Id of div to mine-tile if it contains a mine
function setMineId() {
    let mineTile = document.getElementsByClassName("game-tile");
    let mineArray = [];
    
    for (let i = 0; i < mineTile.length; i++) {
        let mineTileId = mineTile[i].id;
        let [row, col] = mineTileId.split("-").map(Number);
        mineArray.push([row, col]);

        if (mines.some(mine => mine[0] === row && mine[1] === col)) {
            mineTile[i].classList.add("mine-tile");
        }
    }
}

//mineTile[i].classList.add("mine-tile") // mineArray.push([row, col]);
// will reveal hidden tile
function revealTile(event) {
    const currentTileId = event.target.id;
    const [row, col] = currentTileId.split("-").map(Number); //map.Number to change string into number

    if (currentTileId === "flag" || currentTileId === "mine-pressed") {
        return;
    }

    if (mines.some(mine => mine[0] === row && mine[1] === col)) {
        disableListener();
        removeAllFlags();
        revealAllMines();
        setTimeout(gameOver, 1000); // calls gameover function after 2 second delay
        stopTimer();
    } else { 
        const minesDeteced = checkTile(row, col);
        this.innerText = minesDeteced;
        this.classList.add("revealed");
        checkNum.call(this); //changes innerText font color based on number

        if (minesDeteced === 0) {
            revealOtherTiles(row, col);
        }
    }

    setTimeout(winGame, 500);
}

function disableListener() {
    const allTiles = document.querySelectorAll(".game-tile");
    allTiles.forEach(allTiles => allTiles.removeEventListener("click", revealTile));
    const rightClickTiles = document.querySelectorAll(".game-tile");
    rightClickTiles.forEach(rightClickTiles => rightClickTiles.removeEventListener("contextmenu", markTile));
}

//reveals allmines when one mine is clicked
function revealAllMines() {
    let allMines = document.getElementsByClassName("mine-tile");
    
    for (let i = 0; i < allMines.length; i++) {
        let mineImg = document.createElement("img");
        mineImg.setAttribute("src", "assets/images/mine.png");
        mineImg.id = "mine-pressed";
        allMines[i].classList.add("revealed-mine");
        allMines[i].appendChild(mineImg);
    }
}

//removes all flags from minetiles when mines are revealed
function removeAllFlags() {
    let allTiles = document.getElementsByClassName("mine-tile");
    
    for (let a = 0; a < allTiles.length; a++) {
        let allFlags = allTiles[a].getElementsByClassName("flag-tile");
        while (allFlags.length > 0) {
            allTiles[a].removeChild(allFlags[0]);
        }
    }
}

// adds or removes flag to current tile 
//decrements and increments flag counter
function markTile(event) {
    event.preventDefault();
    const currentImg = this.querySelector("img");
    var flagCounter = parseInt(document.getElementById("count").innerText);

    if (this.classList.contains("revealed")) {
        return;         
    } 
    
    if (currentImg === null) {
        let flagImg = document.createElement("img");
        flagImg.setAttribute("src", "assets/images/flag.png");
        flagImg.id = "flag";
        flagImg.classList.add("flag-tile");
        this.appendChild(flagImg);
        document.getElementById("count").innerText = --flagCounter;
    }  else {
        this.removeChild(currentImg);
        document.getElementById("count").innerText = ++flagCounter;
    }
    
}

// will check if tile revealed has a mine on the location
function checkTile(row, col) {
    let gameRow;
    let gameColumn;

    if (document.getElementById("easy-board")) {
        gameRow = 8;
        gameColumn = 8;
    } else if (document.getElementById("normal-board")) {
        gameRow = 12;
        gameColumn = 12;
    } else if (document.getElementById("hard-board")) {
        gameRow = 12;
        gameColumn = 20;
    }
    const direction = 
    [[1, 1], [1, -1], [1, 0], //checks bottom row
    [-1, 1], [-1, 0], [-1, -1], //checks top row
    [0, 1], [0, -1],]; //checks middle row
    
    let mineCount = 0;

    for (let [dx, dy] of direction) {
        let newRow = row + dx;
        let newCol = col + dy;
        
        if (newRow >= 0 && newRow < gameRow && newCol >= 0 && newCol < gameColumn) {
            if (mines.some(mine => mine[0] === newRow && mine[1] === newCol)) {
                mineCount++;
            } 
        }
    }
    return mineCount;
}

//reveals other tiles that are empty close to
//current tile revealed
function revealOtherTiles (row, col) {
    let gameRow;
    let gameColumn;

    if (document.getElementById("easy-board")) {
        gameRow = 8;
        gameColumn = 8;
    } else if (document.getElementById("normal-board")) {
        gameRow = 12;
        gameColumn = 12;
    } else if (document.getElementById("hard-board")) {
        gameRow = 12;
        gameColumn = 20;
    }

    const direction = 
    [[1, 1], [1, -1], [1, 0], // Checks bottom row
    [-1, 1], [-1, 0], [-1, -1], // Checks top row
    [0, 1], [0, -1],]; // Checks middle row
    
    for (let [dx, dy] of direction) {
        let newRow = row + dx;
        let newCol = col + dy;

        if (newRow >= 0 && newRow < gameRow && newCol >= 0 && newCol < gameColumn) {
            let tile = document.getElementById(newRow + "-" + newCol);
            if (!tile.classList.contains("revealed")) {
                tile.click();
            }
        }   
    }
}

//changes inner text color of tile divs to
//match specific number of mines around tile
function checkNum() {
    const innerNum = parseInt(this.innerText);

    if (innerNum === 1) {
        this.classList.add("number-one"); 
    } else if (innerNum === 2) {
        this.classList.add("number-two");
    } else if (innerNum === 3) {
        this.classList.add("number-three");
    } else if (innerNum === 4) {
        this.classList.add("number-four");
    } else if (innerNum === 5) {
        this.classList.add("number-five");
    } else if (innerNum === 6) {
        this.classList.add("number-six");
    } else if (innerNum === 7) {
        this.classList.add("number-seven");
    } else if (innerNum === 8) {
        this.classList.add("number-eight");
    } else if (innerNum === 0) {
        this.innerText = "";
    }
}

//inserts game over menu on top of the game board
function gameOver() {
    let gameOverDisplay = document.createElement("div");
    gameOverDisplay.id = "game-over-display";
    gameOverDisplay.innerHTML = `
    <div id = "game-over-menu">
    <p>Game Over!</p>
    <br>
    <button class="menu-button over" id="main-menu">Main Menu</button>
    <br>
    <button class="menu-button over" id="r-button">Restart</button>
    <br>
    <button class="menu-button over" id="leader-board">Leader Board</button>
    </div>
    `;
    document.body.appendChild(gameOverDisplay);

    let restart = document.getElementById("r-button");
    restart.addEventListener("click", restartGame);

    let mainMenu = document.getElementById("main-menu");
    mainMenu.addEventListener("click", loadMainMenu);

    let leaderB = document.getElementById("leader-board");
    leaderB.addEventListener("click", loadLeaderBoard);
}

//checks whether you have revealed all safe tiles
//if so, you win the game
function winGame() {
    let revealedTiles = document.getElementsByClassName("revealed").length;
    let eBoard = document.getElementById("easy-board");
    let nBoard = document.getElementById("normal-board");
    let hBoard = document.getElementById("hard-board");
    let mBoard = document.getElementById("menu");
    let safeTiles = 0;

    if (mBoard.contains(eBoard)) {
        safeTiles = 54;  
    } else if (mBoard.contains(nBoard)) {
        safeTiles = 114;
    } else if (mBoard.contains(hBoard)) {
        safeTiles = 190;
    }

    if (revealedTiles === safeTiles) {
        disableListener("click", revealTile);
        stopTimer();
        displayWinMenu();
        calculateScore();
    }
}


// will restart the current game
function restartGame() {
    let eBoard = document.getElementById("easy-board");
    let nBoard = document.getElementById("normal-board");
    let hBoard = document.getElementById("hard-board");
    let mBoard = document.getElementById("menu");
    //removes gameover display
    let gameOverDisplay = document.getElementById("game-over-menu");
    if (gameOverDisplay) {
       gameOverDisplay.remove();
    }

    if (mBoard.contains(eBoard)) {
        let event = { target: { id: "easy"} };
        loadBoard(event);
    } else if (mBoard.contains(nBoard)) {
        let event = { target: { id: "normal"} };
        loadBoard(event);
    } else if (mBoard.contains(hBoard)) {
        let event = { target: { id: "hard"} };
        loadBoard(event);
    }
}

let timerInterval;

//sets the rule for timer
function incrementTimer() {
    var timerEle = document.getElementById("timer");
    var currentTime = parseInt(document.getElementById("timer").innerText);
    timerEle.innerText = currentTime + 1;   
}

//increments timer by one every second
function startTimer() {
if (!timerInterval) {
    timerInterval = setInterval(incrementTimer, 1000);
}
}

//stops the timer and logs timer score to console
function stopTimer() {
if (timerInterval) {
    console.log(timerInterval);
    clearInterval(timerInterval);
    timerInterval = 0;
}
}

function loadInst() {
    window.location = "instructions.html";
}

function loadLeaderBoard() {
    window.location = "score.html";
}

function loadMainMenu() {
    window.location = "index.html";
}

function displayWinMenu() {
    let winDisplay = document.createElement("div");
    winDisplay.id = "win-display";
    winDisplay.innerHTML = `
    <div id = "win-menu">
    <p>Congratulations You Win!</p>
    <br>
    <input type="text" id="fname" name="fname" value="Name...">
    <br>
    <p>Your Score:<span id="score-value">0</span></P>
    <br>
    <input type="submit" value="submit score" id="submit-btn">
    </div>
    `;
    document.body.appendChild(winDisplay);
}

function calculateScore() {
    let currentTime = document.getElementById("timer");
    let currentValue = currentTime.textContent;
    console.log(currentValue);
    let scoreValue = document.getElementById("score-value");
    scoreValue.innerText = currentValue;

    let submitBtn = document.getElementById("submit-btn");
    submitBtn.addEventListener("click", submitScore);    
}

function submitScore() {
    let nameV = document.getElementById("fname").value;
    let scoreV = document.getElementById("score-value").innerText;
    localStorage.setItem("name", nameV);
    localStorage.setItem("score-value", scoreV);
    window.location.href = "score.html";
    loadLeaderBoard();
}