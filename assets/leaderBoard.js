document.addEventListener("DOMContentLoaded", function() {
    updateLeaderBoard();
}); 

let lBoardBtn = document.getElementById("l-menu");
lBoardBtn.addEventListener("click", loadMainMenu)

function loadMainMenu() {
    window.location = "index.html";
}


function updateLeaderBoard() {
    let name = localStorage.getItem("name");
    let score = parseInt(localStorage.getItem("score-value"));
    
    if (name && !isNaN(score)) {
        let leaderBoard = [
            {name: document.getElementById("l-name-1").innerText,
                score: parseInt(document.getElementById('l-score-1').innerText )
            },
            {name: document.getElementById("l-name-2").innerText,
                score: parseInt(document.getElementById('l-score-2').innerText )
            },
            {name: document.getElementById("l-name-3").innerText,
                score: parseInt(document.getElementById('l-score-3').innerText )
            },
            {name: document.getElementById("l-name-4").innerText,
                score: parseInt(document.getElementById('l-score-4').innerText )
            },
            {name: document.getElementById("l-name-5").innerText,
                score: parseInt(document.getElementById('l-score-5').innerText )
            },
        ];
        //push new value into array
        leaderBoard.push({name: name, score: score});
        leaderBoard.sort((a, b) => a.score - b.score);
        leaderBoard.slice(0, 5);

        leaderBoard.forEach((entry, index) => {
            let nameEle = document.getElementById(`l-name-${index + 1}`);
            let scoreEle = document.getElementById(`l-score-${index + 1}`);

            if (nameEle && scoreEle) {
                nameEle.innerText = entry.name;
                scoreEle.innerText = entry.score;
            }
        })
    }
}





