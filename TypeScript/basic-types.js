"use strict";
//****boolean****
let isDone = true;
//****number****
let decimal = 1.1212;
let hex = 0x12;
let octal = 0o23;
let binary = 0b1001;
//*****string*****
let color = "red";
color = 'green';
let fullname = "Tom Cat";
let age = 6;
let sentence = `Hello, my name is ${fullname}.

i'll be ${age} years old next month`;
//equivalent
let sentences = 'Hello,my name is' + fullname + '.\n\n' +
    'i\'ll be ' + age + ' years old next month';
console.info([isDone, decimal, hex, octal, binary, color, sentence, sentences]);
//*****Array*****
let list1 = [1, 2, 3];
let list2 = [1, 2, 3];
//*****Tuple*****
//declare a tuple type
let x;
// initialize it
x = ['Hello', 10];
//
// x=[false,11];
console.log(x[0].toString());
console.log(x[0].substr(1));
console.log(x[1].toString());
console.log(x[1].toString());
// console.log(x[2].toString());
x[2] = "nihao";
x[4] = 121;
x[3] = "hh";
//x[5]=true; //error!
console.log(x[2].toString());
console.log(x[3].toString());
console.log(x[4].toString());
//******Enum*******
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
let c = Color.Blue;
let colorName = Color[2];
console.log(colorName);
/* Any and Object*/
let notSure = 4;
notSure = "this is a string";
notSure = true;
// notSure.ifItExist();
// notSure.toFixed();
// let prettySure:Object=4;
// prettySure.toFixed();
/* void:the absence of having any type at all*/
function warnUser() {
    alert('this is my warning message');
}
let unusable;
unusable = null;
unusable = undefined;
/* never */
function error(message) {
    throw Error(message);
}
function fail() {
    return error("something failed");
}
function infiniteLoop() {
    while (true) {
    }
}
/* Type Assertions */
let somevalue = "i am a string";
let stringLength = somevalue.length;
//or
stringLength = somevalue.length;
