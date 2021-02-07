// Example 8.1 EJS Sandbox
class MultiplicatorUnitFailure extends Error {}

function primitive_multiply() {
  if (Math.random() < 0.2) {
    var a = document.getElementsByTagName("input")[0].value;
    var b = document.getElementsByTagName("input")[1].value;
    document.getElementById("test1").innerHTML = a * b;
  } else {
    document.getElementById("test1").innerHTML = "Fail";
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliable_multiply() {
    for (;;) {
        try {
            primitive_multiply();
            break;
        } catch (error) {
            if (error.prototype = "MultiplicatorUnitFailure") {
            reliable_multiply();
            break;
            }
        }
    }
}
