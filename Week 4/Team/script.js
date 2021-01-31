var player = 1;
var turn = 0;
document.querySelectorAll(".cell").forEach(item => {
    item.addEventListener('touchend', () => { // mobile functionality
        gameCode(item);
    })
    item.addEventListener('click', () => { // mouse functionality
        gameCode(item);
    })

})

function gameCode(item) {
    if (item.innerHTML == "") {
        document.getElementById("warning").innerHTML = "";
        item.innerHTML = chooseLetter();
        var cell = [];
        turn++;
        checkWinner(cell, turn);
    } else {
        document.getElementById("warning").innerHTML = "Please choose an empty square";
    }
}

function checkWinner(cell, turn) {
    for (let i = 0; i < 9; i++) {
        cell[i] = document.getElementsByClassName("cell")[i].innerHTML;
    }

    // Vertical Checks
    if (cell[0] == cell[1] && cell[0] == cell[2] && !(cell[0] == '')) {
        if (cell[0] == 'X') {
            document.getElementById("warning").innerHTML = "X's Won!";
        } else {
            document.getElementById("warning").innerHTML = "O's Won!";
        }
    }

    if (cell[3] == cell[4] && cell[3] == cell[5] && !(cell[3] == '')) {
        if (cell[3] == 'X') {
            document.getElementById("warning").innerHTML = "X's Won!";
        } else {
            document.getElementById("warning").innerHTML = "O's Won!";
        }
    }

    if (cell[6] == cell[7] && cell[6] == cell[8] && !(cell[6] == '')) {
        if (cell[6] == 'X') {
            document.getElementById("warning").innerHTML = "X's Won!";
        } else {
            document.getElementById("warning").innerHTML = "O's Won!";
        }
    }

    //Horizontal Checks
    if (cell[0] == cell[3] && cell[0] == cell[6] && !(cell[0] == '')) {
        if (cell[0] == 'X') {
            document.getElementById("warning").innerHTML = "X's Won!";
        } else {
            document.getElementById("warning").innerHTML = "O's Won!";
        }
    }

    if (cell[1] == cell[4] && cell[1] == cell[7] && !(cell[1] == '')) {
        if (cell[1] == 'X') {
            document.getElementById("warning").innerHTML = "X's Won!";
        } else {
            document.getElementById("warning").innerHTML = "O's Won!";
        }
    }

    if (cell[2] == cell[5] && cell[2] == cell[8] && !(cell[2] == '')) {
        if (cell[2] == 'X') {
            document.getElementById("warning").innerHTML = "X's Won!";
        } else {
            document.getElementById("warning").innerHTML = "O's Won!";
        }
    }

    // Diagonal Checks

    if (cell[0] == cell[4] && cell[0] == cell[8] && !(cell[0] == '')) {
        if (cell[0] == 'X') {
            document.getElementById("warning").innerHTML = "X's Won!";
        } else {
            document.getElementById("warning").innerHTML = "O's Won!";
        }
    }

    if (cell[2] == cell[4] && cell[2] == cell[6] && !(cell[2] == '')) {
        if (cell[2] == 'X') {
            document.getElementById("warning").innerHTML = "X's Won!";
        } else {
            document.getElementById("warning").innerHTML = "O's Won!";
        }
    }

    // Tie Checks
    if (turn == 9 && !(document.getElementById("warning").innerHTML == "X's Won!"  || document.getElementById("warning").innerHTML == "O's Won!")) {
        document.getElementById("warning").innerHTML = "Tie Game!";
    }
}

function chooseLetter() {
    if (player === 1) {
        player++;
        return 'X';
    } else {
        player--;
        return 'O';
    }
}

function resetBoard() {
    document.querySelectorAll(".cell").forEach(item => {
        item.innerHTML = "";
    })
    document.getElementById("warning").innerHTML = "";
    player = 1;
    turn = 0;
}