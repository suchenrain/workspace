"use strict";
/* 泛型 */
/* generic functions 泛型函数*/
/* type variable(类型变量) */
function identity(arg) {
    return arg;
}
let output = identity("ddd"); //string  type argument inference (类型推断)
let output2 = identity(89);
console.log(output, output2);
/* generic type variables */
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
let out = loggingIdentity([]);
let myIdentity = identity;
let myIdentity2 = identity;
myIdentity2(27);
/* generic class 泛型类 (实例类型部分)*/
class GenericNumber {
}
function loggingIdentity3(arg) {
    console.log(arg.length);
    return arg;
}
class GenericCT {
}
//using type parameters in constraints
function getPropertys(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3 };
console.log(getPropertys(x, 'a'));
//using class type in constraints
function factoryC(c) {
    return new c();
}
//or
class BeeKeeper {
}
class ZooKeeper {
}
class Animal {
}
class Bee extends Animal {
}
class Lion extends Animal {
}
function createInstance(c) {
    return new c();
}
console.log(createInstance(Lion).keeper); // typechecks!
createInstance(Bee).keeper; // typechecks!
