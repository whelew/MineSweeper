const levelSelect = document.getElementById("menu")
levelSelect.addEventListener("click", loadBoard)

//insert game board after clicking on difficulty button
function loadBoard(event) {
    
    switch (event.target.id) {
        case "easy":
            levelSelect.innerHTML = `<div class="game-board" id="easy-board"></div>`
            populateGameBoard(8, 8, "easy-board");
            break;
        case "normal":
            levelSelect.innerHTML = `<div class="game-board" id="normal-board"></div>`
            populateGameBoard(12, 12, "normal-board");
            break; 
        case "hard":
            levelSelect.innerHTML = `<div class="game-board" id="hard-board"></div>`
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

function runGame() {
    
} 

function incrementFlag() {
    
}

function revealTile(event) {
    event.preventDefault();
    alert ("you left clicked the div");
}

function markTile(event) {
    event.preventDefault();
    
    if (this.querySelector("img") === null) {
        let flagImg = document.createElement("img");
        flagImg.setAttribute("src", "assets/images/flag.png");
        flagImg.id = "flag";
        flagImg.setAttribute("width", "70%");
        flagImg.setAttribute("height", "70%");
        
    
        this.appendChild(flagImg);
    }  else {
        this.remove();
    }
}

function checkTile() {

}

function restartGame() {

}
