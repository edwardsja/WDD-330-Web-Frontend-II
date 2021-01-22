//Example 3.1 EJS Sandbox
function min(x, y) {
    if (x > y) {
      document.getElementById("test1").innerHTML = y;
    }
    else {
      document.getElementById("test1").innerHTML = x;
    }
  }

  //Example 3.2 EJS Sandbox
  function isEven(num) {
    document.getElementById("test2").innerHTML = Math.abs(num) % 2 === 0; //Math.abs() converts negative numbers to positive which allows modulo to function correctly
  }


  //Example 3.3 EJS Sandbox
  function countBs(inputString) {
    let numOfB = 0;
   for (let i = 0; i <= inputString.length - 1; i++) {
     if (inputString[i] === "B") {
       numOfB++
     }
   }
   document.getElementById("test3").innerHTML = numOfB;
  }

function countChar(inputString, checkedChar) {
    let numOfChar = 0;
   for (let i = 0; i <= inputString.length - 1; i++) {
     if (inputString[i] === checkedChar) {
       numOfChar++
     }
   }
   document.getElementById("test3").innerHTML = numOfChar;
  }
