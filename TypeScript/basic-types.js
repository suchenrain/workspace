//****boolean****
var isDone = true;
//****number****
var decimal = 1.1212;
var hex = 0x12;
var octal = 19;
var binary = 9;
//*****string*****
var color = "red";
color = 'green';
var fullname = "Tom Cat";
var age = 6;
var sentence = "Hello, my name is " + fullname + ".\n\ni'll be " + age + " years old next month";
//equivalent
var sentences = 'Hello,my name is' + fullname + '.\n\n' +
    'i\'ll be ' + age + ' years old next month';
console.info([isDone, decimal, hex, octal, binary, color, sentence, sentences]);
//*****Array*****
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//*****Tuple*****
//declare a tuple type
var x;
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
console.log(x[2].toString());
console.log(x[3].toString());
console.log(x[4].toString());
