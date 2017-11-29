var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* class-based */
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.gretting = message;
    }
    Greeter.prototype.greet = function () {
        return ("Hello," + this.gretting);
    };
    return Greeter;
}());
var g = new Greeter("test");
console.log(g.greet());
/* Inheritance */
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.Move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.Bark = function () {
        console.log("woof!woof!");
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.Bark();
dog.Move(10);
dog.Bark();
/* complex inheritance */
var Animal2 = /** @class */ (function () {
    function Animal2(thename) {
        this.name = thename;
    }
    Animal2.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal2;
}());
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Test;
}(Animal2));
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    ;
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("iam a snake...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal2));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(sname) {
        return _super.call(this, sname) || this;
    }
    ;
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 30; }
        console.log("iam a horse...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal2));
var t1 = new Test('Test');
var t2 = new Snake("snake");
var t3 = new Horse("horse");
t1.move();
t2.move();
t3.move();
/* Protected Modifier */
//protected property
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Person));
var howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error
//protected constructor
var Person2 = /** @class */ (function () {
    function Person2(theName) {
        this.name = theName;
    }
    return Person2;
}());
// Employee can extend Person
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    function Employee2(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee2.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee2;
}(Person2));
var howard2 = new Employee2("Howard", "Sales");
// let john2 = new Person2("John"); // Error: The 'Person' constructor is protected
/* Readonly parameter properties */
//Parameter properties are declared by prefixing a constructor parameter with an accessibility modifier or readonly, or both
var Octopus = /** @class */ (function () {
    function Octopus(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
    return Octopus;
}());
/* get and set */
var passcode = "secret passcode";
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
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xdis = point.x - Grid.origin.x;
        var ydis = point.y - Grid.origin.y;
        return Math.sqrt(xdis * xdis + ydis * ydis) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1);
var grid2 = new Grid(5);
console.log(grid1.calculateDistanceFromOrigin({ x: 6, y: 2 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 6, y: 2 }));
/* Abstract Class */
var AnimalT = /** @class */ (function () {
    function AnimalT() {
    }
    AnimalT.prototype.move = function () {
        console.log("roaming the earth...");
    };
    return AnimalT;
}());
// let tt=new AnimalT(); --error
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("DepartName:" + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "haha") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating reports...");
    };
    return AccountingDepartment;
}(Department));
var ad = new AccountingDepartment();
ad.printMeeting();
ad.generateReports();
ad.printName();
