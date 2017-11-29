/* class-based */
class Greeter {
    gretting: string;
    constructor(message: string) {
        this.gretting = message;
    }
    greet(): string {
        return (`Hello,${this.gretting}`);
    }
}
let g = new Greeter("test");
console.log(g.greet());

/* Inheritance */
class Animal {
    Move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    Bark() {
        console.log("woof!woof!")
    }
}
const dog = new Dog();
dog.Bark();
dog.Move(10);
dog.Bark();

/* complex inheritance */
class Animal2 {
    name: string;
    constructor(thename: string) {
        this.name = thename;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Test extends Animal2 {

}
class Snake extends Animal2 {
    constructor(name: string) { super(name); };
    move(distanceInMeters: number = 5) {
        console.log("iam a snake...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal2 {
    constructor(sname: string) { super(sname); };
    move(distanceInMeters: number = 30) {
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
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error

//protected constructor
class Person2 {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee can extend Person
class Employee2 extends Person2 {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard2 = new Employee2("Howard", "Sales");
// let john2 = new Person2("John"); // Error: The 'Person' constructor is protected

/* Readonly parameter properties */
//Parameter properties are declared by prefixing a constructor parameter with an accessibility modifier or readonly, or both
class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
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
    static origin = { x: 0, y: 0 }
    constructor(public scale: number) {

    }
    calculateDistanceFromOrigin(point: { x: number, y: number }) {
        let xdis = point.x - Grid.origin.x;
        let ydis = point.y - Grid.origin.y;
        return Math.sqrt(xdis * xdis + ydis * ydis) / this.scale;
    }
}
let grid1 = new Grid(1);
let grid2 = new Grid(5);

console.log(grid1.calculateDistanceFromOrigin({ x: 6, y: 2 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 6, y: 2 }));

/* Abstract Class */
abstract class AnimalT {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}
// let tt=new AnimalT(); --error

abstract class Department {
    constructor(public name: string) {

    }
    printName(): void {
        console.log("DepartName:" + this.name);
    }
    abstract printMeeting(): void;
}
class AccountingDepartment extends Department {
    constructor(){
        super("haha");
    }
    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
    generateReports(): void {
        console.log("Generating reports...");
    }
}

let ad=new AccountingDepartment();
ad.printMeeting();
ad.generateReports();
ad.printName();