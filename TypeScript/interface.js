/* “duck typing” or “structural subtyping” (鸭子类型或结构子类型)*/
function printLable(labelledObj) {
    console.log(labelledObj.lable);
}
var myObj = { size: 10, lable: "size 10 object" };
printLable(myObj);
function printLable2(labelledObj) {
    console.log(labelledObj.lable);
}
var myObj2 = myObj;
printLable2(myObj);
printLable2(myObj2);
function creatSquare(config) {
    var newSquare = { color: 'red', area: 1000 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = creatSquare({ color: 'blue' });
console.log(mySquare);
console.log(mySquare.color, mySquare.area);
var p1 = { x: 2, y: 4 };
// p1.x=9;
var a = [1, 2, 3];
var ro = a;
ro.length;
// ro.length=4;
// a=ro;//error!
a = ro;
/* excess property checks */
// error: 'colour' not expected in type 'SquareConfig'
// let mySquare2 = creatSquare({colour: "red", width: 100 });
//approach 1 =>type assentions
var mySquare3 = creatSquare({ colour: "red", width: 100 });
function creatSquare2(config) {
    var newSquare = { color: 'red', area: 1000 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare4 = creatSquare2({ colour: "red", width: 100 });
//approach 3 =>use another variable
var squareOptions = { colour: "red", width: 100 };
creatSquare(squareOptions);
creatSquare2(squareOptions);
var mysearch;
mysearch = function (source, subString) {
    // return source.search(subString)>-1;
    return false;
};
mysearch = function (s, sub) {
    // return s.search(sub)>-1;
    return false;
};
var myArrary = ["test", "ok"];
console.log(myArrary[0]);
