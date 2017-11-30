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
testRest("123", 4, true, "hhh");

/* this and arrow function */
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    creatCardPicker: function () {
        return function () {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            // return { suit: this.suits[pickedSuit], card: pickedSuit % 13 }
        }
    }
}

// let cardPicker=deck.creatCardPicker();
// let pickedCard=cardPicker();
// console.log("card: " + pickedCard.card + " of " + pickedCard.suit);//error!

let deck2 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    creatCardPicker: function () {
        return ()=> {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
        }
    }
}

let cardPicker2=deck2.creatCardPicker();
let pickedCard2=cardPicker2();
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);//error!


/* overloads 重载 */
