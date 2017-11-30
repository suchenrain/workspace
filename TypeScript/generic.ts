/* 泛型 */
/* generic functions 泛型函数*/
/* type variable(类型变量) */
function identity<T>(arg: T): T {
    return arg;
}

let output = identity("ddd"); //string  type argument inference (类型推断)
let output2 = identity<number>(89)
console.log(output, output2);


/* generic type variables */
function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}
let out = loggingIdentity([]);

/* end of generic functions 泛型函数*/

/* generic interface 泛型接口 */
interface GenericIdentiryFn {
    <T>(arg: T): T;
}
let myIdentity: GenericIdentiryFn = identity;

interface GenericIdentiryFn2<T> {
    (arg: T): T;
}
let myIdentity2: GenericIdentiryFn2<number> = identity;
myIdentity2(27);

/* generic class 泛型类 (实例类型部分)*/
class GenericNumber<T>{
    // static proname:T; --Error
    zeroValue: T;
    add: (x: T, y: T) => T;
}

/* generic constraints (泛型约束)*/
interface LengthWise {
    length: number;
}
function loggingIdentity3<T extends LengthWise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
interface GenericTest<T extends LengthWise> {
    add: (arg: T) => T;
}
class GenericCT<T extends LengthWise>{
    add: (arg: T) => T;
}

//using type parameters in constraints
function getPropertys<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3 };
console.log(getPropertys(x, 'a'));

//using class type in constraints
function factoryC<T>(c: { new(): T; }): T {
    return new c();
}
//or
class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

console.log(createInstance(Lion).keeper)  // typechecks!
createInstance(Bee).keeper   // typechecks!