const levelSelect = document.getElementById("menu")
levelSelect.addEventListener("click", loadBoard)

//insert game board after clicking on difficulty button
function loadBoard(event) {
    
    switch (event.target.id) {
        case "easy":
            levelSelect.innerHTML = `<div class="game-board" id="easy-board"></div>`
            populateEasyBoard();
            break;
        case "normal":
            levelSelect.innerHTML = `<div class="game-board" id="normal-board"></div>`
            populateNormalBoard()
            break; 
        case "hard":
            levelSelect.innerHTML = `<div class="game-board" id="hard-board"></div>`
            populateHardBoard()
            break;
        case "leader-board":
            alert ("You clicked the leaderboard button");
            break;
    }
};



function runGame() {
    
} 


//populates game board with tiles
function populateEasyBoard() {
    var board = [];
    var rows = 8;
    var columns = 8;

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            document.getElementById("easy-board").append(tile)
            row.push(tile);
        }
        board.push(row);
    }
    console.log(board)    
}

//populates game board with tiles
function populateNormalBoard() {
    var board = [];
    var rows = 12;
    var columns = 12;

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            document.getElementById("normal-board").append(tile)
            row.push(tile);
        }
        board.push(row);
    }
    console.log(board)    
}

//populates game board with tiles
function populateHardBoard() {
    var board = [];
    var rows = 12;
    var columns = 20;

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            document.getElementById("hard-board").append(tile)
            row.push(tile);
        }
        board.push(row);
    }
    console.log(board)    
}

function incrementFlag() {

}

function revealTile() {

}

function markTile() {

}

function checkTile() {

}

function restartGame() {

}
