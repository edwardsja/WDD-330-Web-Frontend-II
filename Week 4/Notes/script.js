// Example 6.1 EJS Sandbox
class Vec {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    plus(newVec) {
        this.x = this.x + newVec.x;
        this.y = this.y + newVec.y;
    }
    minus(newVec) {
        this.x = this.x - newVec.x;
        this.y = this.y - newVec.y;
    }

    get length() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
}

function add_vec() {
     let firstVec = new Vec(1, 2);

     firstVec.plus(new Vec(2, 3));

     document.getElementById("test1").innerHTML = firstVec.x + ', ' + firstVec.y ;
}

function sub_vec() {
    let firstVec = new Vec(1, 2);

    firstVec.minus(new Vec(2, 3));

    document.getElementById("test1").innerHTML = firstVec.x + ', ' + firstVec.y ;
}

function length_calc() {
    let firstVec = new Vec(3, 4).length;

    document.getElementById("test1").innerHTML = firstVec;
}