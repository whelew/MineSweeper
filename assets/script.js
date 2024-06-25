const levelSelect = document.getElementById("menu")
levelSelect.addEventListener("click", loadBoard)

//insert game board after clicking on difficulty button
function loadBoard(event) {
    
    switch (event.target.id) {
        case "easy":
            levelSelect.innerHTML = `
            <p class="Flag-counter"><img src="assets/images/flag.png">Flags Remaining:<span id="count">10</span></p>
            <div class="game-board" id="easy-board"></div>
            `
            populateGameBoard(8, 8, "easy-board");
            setMines();
            break;
        case "normal":
            levelSelect.innerHTML = `
            <p class="Flag-counter"><img src="assets/images/flag.png">Flags Remaining:<span id="count">20</span></p>
            <div class="game-board" id="normal-board"></div>`
            populateGameBoard(12, 12, "normal-board");
            break; 
        case "hard":
            levelSelect.innerHTML = `
            <p class="Flag-counter"><img src="assets/images/flag.png">Flags Remaining:<span id="count">30</span></p>
            <div class="game-board" id="hard-board"></div>`
            populateGameBoard(12, 20, "hard-board");
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

function setMines() {
    
    for (i = 0; i < 10; i++) {
        let x = Math.floor(Math.random() * 8) +1;
        let y = Math.floor(Math.random() * 8) +1;
        let location = [x, y];
        mines.push(location)
    }
    console.log(mines)
} 

function revealTile(event) {
    event.preventDefault();
    alert ("you left clicked the div");
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

function checkTile() {

}

function restartGame() {

}
