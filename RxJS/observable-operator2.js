const Rx = require('rxjs/Rx')
const observer = {
    next: (value) => { console.log(value); },
    complete: () => console.log('complete'),
    error: (err) => { console.log('Error:' + err) }
}

/* skip */
// source : ----0----1----2----3----4----5--....
// skip(3)
// example: -------------------3----4----5--...
let s1 = Rx.Observable.interval(1000);
let e1 = s1.skip(3);

// e1.subscribe(observer);

/* takeLast */
// source : ----0----1----2----3----4----5|
// takeLast(2)
// example: ------------------------------(45)|
let s2 = Rx.Observable.interval(1000);
let e2 = s2.take(6).takeLast(3);
// e2.subscribe(observer);

/* last ===takeLast(1) */
// source : ----0----1----2----3----4----5|
// last()
// example: ------------------------------(5)|
let s3 = Rx.Observable.interval(1000);
let e3 = s3.take(6).last();
// e3.subscribe(observer);

/* concat */

// source : ----0----1----2|
// source2: (3)|
// source3: (456)|
//             concat()
// example: ----0----1----2(3456)|
let s4 = Rx.Observable.interval(1000).take(3);
let s5 = Rx.Observable.of(3);
let s6 = Rx.Observable.of(4, 5, 6);

let e4 = s4.concat(s5, s6);
// e4.subscribe(observer);
//or
let e5 = Rx.Observable.concat(s4, s5, s6);
// e5.subscribe(observer);


/* startWith */
// source : ----0----1----2----3--...
// startWith(0)
// example: (0)----0----1----2----3--...

let s7 = Rx.Observable.interval(1000);
let e6 = s7.startWith(0);

// e6.subscribe(observer);

/* merge 同一时序*/
// source : ----0----1----2|
// source2: --0--1--2--3--4--5|
//             merge()
// example: --0-01--21-3--(24)--5|
let s8 = Rx.Observable.interval(500).take(4);
let s9 = Rx.Observable.interval(300).take(6);

let e7 = s8.merge(s9);
// e7.subscribe(observer);
//or
let e8 = Rx.Observable.merge(s8, s9);
// e8.subscribe(observer);



/* combineLatest */
// source : ----0----1----2|
// newest : --0--1--2--3--4--5|

//     combineLatest(newest, (x, y) => x + y);

// example: ----01--23-4--(56)--7|

let s10 = Rx.Observable.interval(500).take(3);
let s11 = Rx.Observable.interval(300).take(6);

let e9 = s10.combineLatest(s11, (x, y) => x + y);
// e9.subscribe(observer);

/* zip */
// source : ----0----1----2|
// newest : --0--1--2--3--4--5|
//     zip(newest, (x, y) => x + y)
// example: ----0----2----4|
let e10 = s10.zip(s11, (x, y) => x + y);
// e10.subscribe(observer);

/* withLastestFrom */
// main   : ----h----e----l----l----o|
// some   : --0--1--0--0--0--1|

// withLatestFrom(some, (x, y) =>  y === 1 ? x.toUpperCase() : x);

// example: ----h----e----l----L----O|
let s12 = Rx.Observable.from('hello').zip(Rx.Observable.interval(500), (x, y) => x);
let s13 = Rx.Observable.from([0, 1, 0, 0, 0, 1]).zip(Rx.Observable.interval(300), (x, y) => x);

let e11 = s12.withLatestFrom(s13, (x, y) => {
    return y === 1 ? x.toUpperCase() : x;
})
e11.subscribe(observer);