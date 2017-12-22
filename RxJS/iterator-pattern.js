var arr = [1, 2, 3];
var iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


/* ES5 */
/* function IteratorFromArray(arr){
    if(!(this instanceof IteratorFromArray)){
        throw new Error("please use new IteratorFromArray");
    }
    this._arrary=arr;
    this._cursor=0;
}

IteratorFromArray.prototype.next=function(){
    return this._cursor<this._arrary.length?
    {value:this._arrary[this._cursor++],done:false}:
    {value:undefined,done:true}
} */

/* ES6 */
class IteratorFromArray {
    constructor(arr) {
        this._array = arr;
        this._cursor = 0;
    }
    next() {
        return this._cursor < this._array.length ?
            { value: this._array[this._cursor++], done: false } :
            { done: true }
    }
    map(callback) {
        const iterator = new IteratorFromArray(this._array);
        return {
            next: () => {
                const { value, done } = iterator.next();
                return {
                    done: done,
                    value: done ? undefined : callback(value)
                }
            }
        }
    }
}

let arrTest = [1, 2, 3];
let iteratorTest = new IteratorFromArray(arrTest);
temp = iteratorTest.map(t => t + 4);
console.log(temp.next());
console.log(temp.next());
console.log(temp.next());
console.log(temp.next());


/* Lazy evaluation */
function* getNumber(words) {
    for (let word of words) {
        if (/^[0-9]$/.test(word)) {
            yield parseInt(word, 10);
        }
    }
}

var it = getNumber("30天精通RxJS(127)");
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());