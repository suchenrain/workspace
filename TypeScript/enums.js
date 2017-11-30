"use strict";
/* Enums */
//define a set of named constants.
/* numeric enums */
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 1] = "Up";
    Directions[Directions["Down"] = 2] = "Down";
    Directions[Directions["Left"] = 3] = "Left";
    Directions[Directions["Right"] = 4] = "Right";
})(Directions || (Directions = {}));
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Not Found"] = 404] = "Not Found";
    ResponseStatus[ResponseStatus["OK"] = 200] = "OK";
    ResponseStatus[ResponseStatus["Server Error"] = 500] = "Server Error";
})(ResponseStatus || (ResponseStatus = {}));
function response(recipient, statuscode) {
}
let x = 404;
console.log(x.toString());
/* string enums */
var Directions2;
(function (Directions2) {
    Directions2["Up"] = "Up";
    Directions2["Down"] = "Down";
    Directions2["Left"] = "Left";
    Directions2["Right"] = "Right";
})(Directions2 || (Directions2 = {}));
