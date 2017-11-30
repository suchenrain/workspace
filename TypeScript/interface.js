"use strict";
/* “duck typing” or “structural subtyping” (鸭子类型或结构子类型)*/
function printLable(labelledObj) {
    console.log(labelledObj.lable);
}
let myObj = { size: 10, lable: "size 10 object" };
printLable(myObj);
function printLable2(labelledObj) {
    console.log(labelledObj.lable);
}
let myObj2 = myObj;
printLable2(myObj);
printLable2(myObj2);
function creatSquare(config) {
    let newSquare = { color: 'red', area: 1000 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = creatSquare({ color: 'blue' });
console.log(mySquare);
console.log(mySquare.color, mySquare.area);
let p1 = { x: 2, y: 4 };
// p1.x=9;
let a = [1, 2, 3];
let ro = a;
ro.length;
// ro.length=4;
// a=ro;//error!
a = ro;
/* excess property checks */
// error: 'colour' not expected in type 'SquareConfig'
// let mySquare2 = creatSquare({colour: "red", width: 100 });
//approach 1 =>type assentions
let mySquare3 = creatSquare({ colour: "red", width: 100 });
function creatSquare2(config) {
    let newSquare = { color: 'red', area: 1000 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare4 = creatSquare2({ colour: "red", width: 100 });
//approach 3 =>use another variable
let squareOptions = { colour: "red", width: 100 };
creatSquare(squareOptions);
creatSquare2(squareOptions);
let mysearch;
mysearch = function (source, subString) {
    // return source.search(subString)>-1;
    return false;
};
mysearch = function (s, sub) {
    // return s.search(sub)>-1;
    return false;
};
let myArrary = ["test", "ok"];
console.log(myArrary[0]);
class Animal {
}
class Dog extends Animal {
}
let myArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!
class Clock {
    setTime(d) {
        this.currentTime = d;
    }
    constructor(h, m) {
    }
}
let squareTest = {};
squareTest.color = "blue";
squareTest.penWidth = 2;
squareTest.sideLength = 10;
function getCounter() {
    let counter = function (start) { };
    counter.interval = 2;
    counter.reset = function () { };
    return counter;
}
let c1 = getCounter();
c1(10);
c1.interval = 10;
c1.reset();
/* Interfaces Extending Classes */
/* Description: Besides the public members,Interfaces inherit even the private and protected members of a base class*/
/* Usage Scene:This is useful when you have a large inheritance hierarchy, but want to specify that your code works with only subclasses that have certain properties. The subclasses don’t have to be related besides inheriting from the base class. */
class Control {
}
class Button extends Control {
    select() { }
    ;
}
class Textbox extends Control {
}
class Imagess {
    select() { }
    ;
}
class Locations {
}
