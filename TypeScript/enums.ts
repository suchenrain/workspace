/* Enums */
//define a set of named constants.

/* numeric enums */
enum Directions{
    Up=1,
    Down,
    Left,
    Right
}

enum ResponseStatus{
    'Not Found'=404,
    'OK'=200,
    'Server Error'=500
}
function response(recipient:string,statuscode:ResponseStatus){

}
let x:ResponseStatus=404;
console.log(x.toString());

/* string enums */
enum Directions2{
    Up="Up",
    Down="Down",
    Left="Left",
    Right="Right"
}