"use strict";
/* intersection types(交叉类型) */
function extend(first, second) {
    let results = {};
    for (let id in first) {
        results[id] = first[id];
    }
    for (let id in second) {
        if (!results.hasOwnProperty(id)) {
            results[id] = second[id];
        }
    }
    return results;
}
class Person {
    constructor(name) {
        this.name = name;
    }
}
class ConsoleLog {
    log(m) {
        console.log(m);
    }
}
let jim = extend(new Person("jim"), new ConsoleLog());
jim.log(jim.name);
/* Union Types */
function padLeft(first, second) {
}
function getSmallPet() {
    let x = {};
    x.layEggs = () => { console.log("i am a bird"); };
    return x;
}
let pet = getSmallPet();
pet.layEggs();
var people;
var s = people.name;
var s = people.next.name;
var s = people.next.next.name;
var s = people.next.next.next.name;
/* and more... */ 
