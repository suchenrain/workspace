
/* symbol values are created by calling the Symbol constructor */
let s1=Symbol();
let s2=Symbol("Test");

/* Symbols are immutable, and unique. */
let s3=Symbol("Test");

console.log(s1,s2,s3);
