const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";
let isGameOver = false;

function makeMove(index) {
    if (!isGameOver && cells[index].textContent === "") {
        cells[index].textContent = currentPlayer;
        checkWin();
        currentPlayer = currentPlayer === "X" ? "0" : "X";
    }
}


function checkWin() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (
            cells[a].textContent === "X" &&
            cells[b].textContent === "X" &&
            cells[c].textContent === "X"
        ) {

            declareWinner("X");
            return;
        }
        if (
            cells[a].textContent === "0" &&
            cells[b].textContent === "0" &&
            cells[c].textContent === "0"
        ) {
            declareWinner("0");
            return;
        }
    }
}

function declareWinner(player) {
    isGameOver = true;
    alert(player + " wins!");
}

function resetGame() {
    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("winner");
    });
    currentPlayer = "X";
    isGameOver = false;
}

document.getElementById("reset").addEventListener("click", resetGame);