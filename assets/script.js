const levelSelect = document.getElementById("board")
levelSelect.addEventListener("click", loadBoard)

//insert game board after clicking on difficulty button
function loadBoard(event) {
    
    switch (event.target.id) {
        case "easy":
            levelSelect.innerHTML = `
            <div id=easy-board><p>game board 1</p></div>
            `
            break;
        case "normal":
            levelSelect.innerHTML = `
            <div id=normal-board><p>game board 2</p></div>
            `
            break; 
        case "hard":
            levelSelect.innerHTML = `
            <div id=hard-board><p>game board 3</p></div>
            `
            break;
        case "leader-board":
            alert ("You clicked the leaderboard button");
            break;
    }
};

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
