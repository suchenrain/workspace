function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) { return x + y; };
console.log(myAdd(2, 5));
console.log(add(2, 3));
/* optional and default parameters */
function test(firstname, lastname) {
    if (lastname) {
        return firstname + ' ' + lastname;
    }
    else {
        return firstname;
    }
}
function test2(firstname, lastname) {
    if (lastname === void 0) { lastname = "haha"; }
    return firstname + ' ' + lastname;
}
console.log(test('dd', '232'), test2('ok'), test2('hh', 'dd'));
/* Rest Parameters */
function testRest(firstArg) {
    var restArg = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restArg[_i - 1] = arguments[_i];
    }
    console.log(firstArg, restArg.join(" "));
}
testRest("123", 4, true, "hhh");
