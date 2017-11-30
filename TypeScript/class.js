"use strict";
/* class-based */
class Greeter {
    constructor(message) {
        this.gretting = message;
    }
    greet() {
        return (`Hello,${this.gretting}`);
    }
}
let g = new Greeter("test");
console.log(g.greet());
/* Inheritance */
class Animal {
    Move(distanceInMeters = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    Bark() {
        console.log("woof!woof!");
    }
}
const dog = new Dog();
dog.Bark();
dog.Move(10);
dog.Bark();
/* complex inheritance */
class Animal2 {
    constructor(thename) {
        this.name = thename;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Test extends Animal2 {
}
class Snake extends Animal2 {
    constructor(name) { super(name); }
    ;
    move(distanceInMeters = 5) {
        console.log("iam a snake...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal2 {
    constructor(sname) { super(sname); }
    ;
    move(distanceInMeters = 30) {
        console.log("iam a horse...");
        super.move(distanceInMeters);
    }
}
let t1 = new Test('Test');
let t2 = new Snake("snake");
let t3 = new Horse("horse");
t1.move();
t2.move();
t3.move();
/* Protected Modifier */
//protected property
class Person {
    constructor(name) { this.name = name; }
}
class Employee extends Person {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error
//protected constructor
class Person2 {
    constructor(theName) { this.name = theName; }
}
// Employee can extend Person
class Employee2 extends Person2 {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard2 = new Employee2("Howard", "Sales");
// let john2 = new Person2("John"); // Error: The 'Person' constructor is protected
/* Readonly parameter properties */
//Parameter properties are declared by prefixing a constructor parameter with an accessibility modifier or readonly, or both
class Octopus {
    constructor(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
}
/* get and set */
let passcode = "secret passcode";
/* class Employee3 {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee3();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
} */
/* Static Properties */
class Grid {
    constructor(scale) {
        this.scale = scale;
    }
    calculateDistanceFromOrigin(point) {
        let xdis = point.x - Grid.origin.x;
        let ydis = point.y - Grid.origin.y;
        return Math.sqrt(xdis * xdis + ydis * ydis) / this.scale;
    }
}
Grid.origin = { x: 0, y: 0 };
let grid1 = new Grid(1);
let grid2 = new Grid(5);
console.log(grid1.calculateDistanceFromOrigin({ x: 6, y: 2 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 6, y: 2 }));
/* Abstract Class */
class AnimalT {
    move() {
        console.log("roaming the earth...");
    }
}
// let tt=new AnimalT(); --error
class Department {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log("DepartName:" + this.name);
    }
}
class AccountingDepartment extends Department {
    constructor() {
        super("haha");
    }
    printMeeting() {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
    generateReports() {
        console.log("Generating reports...");
    }
}
let ad = new AccountingDepartment();
ad.printMeeting();
ad.generateReports();
ad.printName();
