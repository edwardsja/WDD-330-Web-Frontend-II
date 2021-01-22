function copyAndPaste() {
    let input = document.getElementsByTagName("input")[0].value;
    document.getElementById("writeHere").innerHTML = input;
}

function summation() {
    let numSum = 0;
    getInput(1);

    if (Number.isInteger(userInput[0]) == false) {
        return;
    }

    for (let i = 0; i <= userInput[0]; i++) {
        numSum = numSum + i;
    }
    document.getElementById("writeHere").innerHTML = numSum;
}

function addNums() {
    getInput(2);

    document.getElementById("writeHere").innerHTML = userInput[0] + userInput[1];

}

const multiplyNums = () => {
    getInput(2);

    document.getElementById("writeHere").innerHTML = userInput[0] * userInput[1];
}

const subtractNums = function() {
    getInput(2);

    document.getElementById("writeHere").innerHTML = userInput[0] - userInput[1];
};

const userInput = [];

function getInput(inputNum) {
     for (let i = 0; i < inputNum; i++) {
        userInput[i] = document.getElementsByTagName("input")[i].value;

        userInput[i] *= 1; //converts to number to minimize errors
     }
}




