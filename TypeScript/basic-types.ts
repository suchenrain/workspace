//****boolean****
let isDone: boolean = true;

//****number****
let decimal: number = 1.1212;
let hex: number = 0x12;
let octal: number = 0o23;
let binary: number = 0b1001;

//*****string*****
let color: string = "red";
color = 'green';

let fullname: string = "Tom Cat";
let age: number = 6;
let sentence: string = `Hello, my name is ${fullname}.

i'll be ${age} years old next month`;
//equivalent
let sentences: string = 'Hello,my name is' + fullname + '.\n\n' +
    'i\'ll be ' + age + ' years old next month';

console.info([isDone, decimal, hex, octal, binary, color, sentence, sentences]);

//*****Array*****
let list1: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];

//*****Tuple*****
//declare a tuple type
let x: [string, number];
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
enum Color { Red = 1, Green, Blue };
let c: Color = Color.Blue;

let colorName: string = Color[2];
console.log(colorName);

/* Any and Object*/
let notSure: any = 4;
notSure = "this is a string";
notSure = true;

// notSure.ifItExist();
// notSure.toFixed();

// let prettySure:Object=4;
// prettySure.toFixed();

/* void:the absence of having any type at all*/
function warnUser(): void {
    alert('this is my warning message');
}

let unusable: void;
unusable = null;
unusable = undefined;

/* never */
function error(message: string): never {
    throw Error(message);
}

function fail() {
    return error("something failed");
}

function infiniteLoop(): never {
    while (true) {

    }
}

/* Type Assertions */
let somevalue:any="i am a string";
let stringLength:number=(<string>somevalue).length;
//or
stringLength=(somevalue as string).length;