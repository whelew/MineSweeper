document.addEventListener("DOMContentLoaded", updateLeaderBoard)

let lBoardBtn = document.getElementById("l-menu");
lBoardBtn.addEventListener("click", loadMainMenu)

function loadMainMenu() {
    window.location = "index.html";
}


function updateLeaderBoard() {
    let name = localStorage.getItem("name");
    let score = parseInt(localStorage.getItem("score-value"));
    
    if (name && !isNaN(score)) {
        let leaderBoard = [];
        for (let i = 0; i <= 5; i++) {
            let leaderName = document.getElementById(`l-name-${i}`).innerText; //stores all names of current lboard
            let leaderScore = parseInt(document.getElementById(`l-score-${i}`).innerText); //stores all scores of current lboard
            leaderBoard.push({name: leaderName, score: leaderScore}); //pushes value into array
        }
        leaderBoard.push({name: name, score: score});
        leaderBoard.sort((a, b) => b.score - a.score);
        leaderBoard.slice(0, 5);

        leaderBoard.forEach(entry, index) => {
            document.getElementById(`l-name-${index + 1}`).innerText = entry.name;
            document.getElementById(`l-score-${index + 1}`).innerText = entry.score;
        }
    }
}





