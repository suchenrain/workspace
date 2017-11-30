"use strict";
/* let and var */
/* const */
const fixedString = "i am a const string";
// readonly const  arrytest:number[]=[1,2,3]; error!!
const arrytest = [1, 3, 2];
arrytest[1] = 9;
console.log(arrytest[1]);
const objTest = { eat: 1, sleep: "ok" };
objTest.eat = 5;
// This should not be confused with the idea that the values they refer to are immutable.
/* Destructuring and Spread(解构和传播) */
/* const and readonly */
// he easiest way to remember whether to use readonly or const is to ask whether you’re using it on a variable or a property. 
// Variables use const whereas properties use readonly. 
