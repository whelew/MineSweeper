function runGame() {

}

function populateGameBoard() {

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

const levelSelect = document.getElementById("board")
levelSelect.addEventListener("click", createBoard)

//insert game board after clicking on difficulty button
function createBoard(event) {
    switch (event.target.id) {
        case "easy":
            alert ("You clicked the easy button") 
            break;
        case "normal":
            alert ("You clicked the normal button")
            break; 
        case "hard":
            alert ("You clicked the hard button")
            break;
        case "leader-board":
            alert ("You clicked the leaderboard button")
    }
};