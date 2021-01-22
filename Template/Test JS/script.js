function countBs(inputString) {
  let numOfB = 0;
 for (let i = 0; i <= inputString.length - 1; i++) {
   if (inputString[i] === "B") {
     numOfB++
   }
 }
 return numOfB;
}

function countChar(inputString, checkedChar) {
  let numOfChar = 0;
 for (let i = 0; i <= inputString.length - 1; i++) {
   if (inputString[i] === checkedChar) {
     numOfChar++
   }
 }
 return numOfChar;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4