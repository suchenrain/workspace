function add(x: number, y: number) {
    return x + y;
}

let myAdd = (x: number, y: number) => { return x + y; }

console.log(myAdd(2, 5));
console.log(add(2, 3));

/* optional and default parameters */
function test(firstname: string, lastname?: string) {
    if (lastname) {
        return firstname + ' ' + lastname;
    }
    else {
        return firstname;
    }
}
function test2(firstname: string, lastname = "haha") {
    return firstname + ' ' + lastname;
}
console.log(test('dd', '232'), test2('ok'), test2('hh', 'dd'));

/* Rest Parameters */
function testRest(firstArg: string, ...restArg: Array<any>) {
    console.log(firstArg, restArg.join(" "));
}
testRest("123",4,true,"hhh");