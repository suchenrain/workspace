/* intersection types(交叉类型) */
function extend<T, U>(first: T, second: U): T & U {
    let results = <T & U>{};
    for (let id in first) {
        (<any>results)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!results.hasOwnProperty(id)) {
            (<any>results)[id] = (<any>second)[id];
        }
    }
    return results;
}

class Person {
    constructor(public name: string) { }
}
interface Loggable {
    log: (string) => void;
}
class ConsoleLog implements Loggable {
    log(m: string) {
        console.log(m);
    }
}
let jim = extend(new Person("jim"), new ConsoleLog());
jim.log(jim.name);


/* Union Types */
function padLeft(first: string, second: string | number) {
}
// padLeft("s",true);
interface Birds {
    fly();
    layEggs:()=>void;
}
interface Fish {
    swim();
    layEggs();
    // layEggs(string);
}
function getSmallPet(): Birds | Fish {
    let x: Birds = <Birds>{};
    x.layEggs = () => { console.log("i am a bird") };
    return x;
}
let pet = getSmallPet();
pet.layEggs();
// pet.fly();//error

/* typeof and instanceof */

/* Type aliases */
type BirdOrFish=Birds|Fish;
type mystring=string;
type nameResolver=()=>string;
//a tree
type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}

//person list
type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
    name: string;
}

var people: LinkedList<Person>;
var s = people.name;
var s = people.next.name;
var s = people.next.next.name;
var s = people.next.next.next.name;

//
type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

/* and more... */