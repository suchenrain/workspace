/* “duck typing” or “structural subtyping” (鸭子类型或结构子类型)*/
function printLable(labelledObj: { lable: string }) {
    console.log(labelledObj.lable);

}
let myObj = { size: 10, lable: "size 10 object" };
printLable(myObj);

interface LabelledValue {
    lable: string;
}

function printLable2(labelledObj: LabelledValue) {
    console.log(labelledObj.lable);
}

let myObj2 = myObj;
printLable2(myObj);
printLable2(myObj2);

/* optional properties */
interface SquareConfig {
    color?: string;
    width?: number;
}
interface Square {
    color: string;
    area: number;
}

function creatSquare(config: SquareConfig): Square {
    let newSquare: Square = { color: 'red', area: 1000 };
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

/* readonly property */
interface Points {
    readonly x;
    readonly y;
}
let p1: Points = { x: 2, y: 4 }
// p1.x=9;

let a: number[] = [1, 2, 3];
let ro: ReadonlyArray<number> = a;
ro.length;
// ro.length=4;
// a=ro;//error!
a = ro as number[];

/* excess property checks */
// error: 'colour' not expected in type 'SquareConfig'
// let mySquare2 = creatSquare({colour: "red", width: 100 });
//approach 1 =>type assentions
let mySquare3 = creatSquare({ colour: "red", width: 100 } as SquareConfig)
//approach 2
interface SquareConfig2 {
    color?: string;
    width?: number;
    [propname: string]: any;//here
}
function creatSquare2(config: SquareConfig2): Square {
    let newSquare: Square = { color: 'red', area: 1000 };
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


/* Function Types */
interface SearchFunc {
    (source: String, subString: number): boolean
}

let mysearch: SearchFunc;
mysearch = function (source: string, subString: number) {
    // return source.search(subString)>-1;
    return false;
}

mysearch = function (s: string, sub: number) {
    // return s.search(sub)>-1;
    return false;
}
// parameters order should matching
/* mysearch=function(sub:number,s:string){
    return true;
} */



/* Indexable Types */
// the type returned from a numeric indexer must be a subtype of the type returned from the string indexer

interface StringArray {
    [index: number]: string;
}
let myArrary: StringArray = ["test", "ok"];
console.log(myArrary[0]);

class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// Error: indexing with a 'string' will sometimes get you an Animal!
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}

interface NumberDictionary {
    [index: string]: number;
    length: number;    // ok, length is a number
    name: string;      // error, the type of 'name' is not a subtype of the indexer
}

interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!


/* Class Types */
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}
class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) {

    }
}

/* Extends */
interface Shape {
    color: string;
}
interface PenStroke {
    penWidth: number;
}

interface SquareTest extends Shape, PenStroke {
    sideLength: number;
}
let squareTest = <SquareTest>{};
squareTest.color = "blue";
squareTest.penWidth = 2;
squareTest.sideLength = 10;

/* Hybrid Types */
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter: Counter = <Counter>function (start: number) { };
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
    private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}
class Button extends Control implements SelectableControl {
    select() { };
}
class Textbox extends Control {

}
class Imagess implements SelectableControl {
    select() { };
}
class Locations{

}