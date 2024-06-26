const levelSelect = document.getElementById("menu")
levelSelect.addEventListener("click", loadBoard)

//insert game board after clicking on difficulty button
function loadBoard(event) {
    
    switch (event.target.id) {
        case "easy":
            levelSelect.innerHTML = `
            <p class="Flag-counter"><img src="assets/images/flag.png">Flags Remaining:<span id="count">20</span></p>
            <div class="game-board" id="easy-board"></div>
            `
            populateGameBoard(8, 8, "easy-board");
            setMines(15, 8, 8);
            break;
        case "normal":
            levelSelect.innerHTML = `
            <p class="Flag-counter"><img src="assets/images/flag.png">Flags Remaining:<span id="count">30</span></p>
            <div class="game-board" id="normal-board"></div>`
            populateGameBoard(12, 12, "normal-board");
            setMines(30, 12, 12);
            break; 
        case "hard":
            levelSelect.innerHTML = `
            <p class="Flag-counter"><img src="assets/images/flag.png">Flags Remaining:<span id="count">50</span></p>
            <div class="game-board" id="hard-board"></div>`
            populateGameBoard(12, 20, "hard-board");
            setMines(50, 12, 20);
            break;
        case "leader-board":
            alert ("You clicked the leaderboard button");
            break;
    }
};

//populates easy game board with tiles
function populateGameBoard(rows, columns, boardId) {
    var board = [];

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.className = "game-tile"
            tile.addEventListener("contextmenu", markTile);
            tile.addEventListener("click", revealTile);
            document.getElementById(boardId).append(tile);
            row.push(tile);
        }
        board.push(row);
    }
    console.log(board);    
}

let mines = []
// pushes a number of coordinates into an array
function setMines(numMines, rows, columns) {
    mines = [] //resets array 

    for (let i = 0; i < numMines; i++) {
        let x = Math.floor(Math.random() * 8);
        let y = Math.floor(Math.random() * 8);
        let location = [x, y];
        if (!mines.some(mine => mine[0] === x && mine[1] === y)) { //avoid duplicate mines
            mines.push(location)    
        } else {
            i--;
        }
    }
    console.log(mines)
} 


// will reveal hidden tile
function revealTile(event) {
    const currentTileId = event.target.id;
    const [row, col] = currentTileId.split("-").map(Number); //map.Number to change string into number

    if (mines.some(mine => mine[0] === row && mine[1] === col)) {
        let mineImg = document.createElement("img");
        mineImg.setAttribute("src", "assets/images/mine.png");
        mineImg.id = "mine-pressed";
        mineImg.setAttribute("width", "70%");
        mineImg.setAttribute("height", "70%");
        this.appendChild(mineImg);
        setTimeout(gameOver, 2000) // calls gameover function after 2 second delay
    } else {
        const minesDeteced = checkTile(row, col);
        this.innerText = minesDeteced;
        this.classList.add("revealed")
        checkNum.call(this); //changes innerText font color based on number
    }
}

// adds or removes flag to current tile 
//decrements and increments flag counter
function markTile(event) {
    event.preventDefault();
    const currentImg = this.querySelector("img");
    var flagCounter = parseInt(document.getElementById("count").innerText)

    if (currentImg === null) {
        let flagImg = document.createElement("img");
        flagImg.setAttribute("src", "assets/images/flag.png");
        flagImg.id = "flag";
        flagImg.setAttribute("width", "70%");
        flagImg.setAttribute("height", "70%");
        this.appendChild(flagImg);
        document.getElementById("count").innerText = --flagCounter
    }  else {
        this.removeChild(currentImg);
        document.getElementById("count").innerText = ++flagCounter
    }
}

// will check if tile revealed has a mine on the location
function checkTile(row, col) {
    const direction = 
    [[1, 1], [1, -1], [1, 0], //checks bottom row
    [-1, 1], [-1, 0], [-1, -1], //checks top row
    [0, 1], [0, -1],]; //checks middle row
    
    let mineCount = 0;

    for (let [dx, dy] of direction) {
        let newRow = row + dx;
        let newCol = col + dy;
        
        if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
            if (mines.some(mine => mine[0] === newRow && mine[1] === newCol)) {
                mineCount++;
            }
        }
    }
    return mineCount;
}


// will restart the current game
function restartGame() {

}

function checkNum() {
    const innerNum = parseInt(this.innerText)

    if (innerNum === 1) {
        this.classList.add("number-one") 
    } else if (innerNum === 2) {
        this.classList.add("number-two")
    } else if (innerNum === 3) {
        this.classList.add("number-three")
    } else if (innerNum === 4) {
        this.classList.add("number-four")
    } else if (innerNum === 5) {
        this.classList.add("number-five")
    } else if (innerNum === 6) {
        this.classList.add("number-six")
    } else if (innerNum === 7) {
        this.classList.add("number-seven")
    } else if (innerNum === 8) {
        this.classList.add("number-eight")
    } else if (innerNum === 0) {
        this.innerText = ""
    }
}

function gameOver() {
    alert ("Game Over, Click Restart to try again")
}
