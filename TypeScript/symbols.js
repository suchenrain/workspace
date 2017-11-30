/* symbol values are created by calling the Symbol constructor */
var s1 = Symbol();
var s2 = Symbol("Test");
/* Symbols are immutable, and unique. */
var s3 = Symbol("Test");
console.log(s1, s2, s3);
