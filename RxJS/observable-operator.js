const Rx = require('rxjs/Rx')
/* create operator */

var people = Rx.Observable.of('Jerry', 'Anna');

function map(source, callback) {
    return Rx.Observable.create((observer) => {
        return source.subscribe((value) => {
            try {
                observer.next(callback(value));
            }
            catch (e) {
                observer.error(e);
            }
        },
            (err) => { observer.error(err); },
            () => { observer.complete() }
        )
    })
}

var helloPeople = map(people, (item) => item + ' Hello~');
helloPeople.subscribe(console.log);

function map2(callback) {
    return Rx.Observable.create((observer) => {
        return this.subscribe(
            (value) => {
                try {
                    observer.next(callback(value));
                } catch (e) {
                    observer.error(e);
                }
            },
            (err) => { observer.error(err); },
            () => { observer.complete() }
        )
    })
}

Rx.Observable.prototype.map = map2;
var people2 = Rx.Observable.of('Jerry', 'Anna');
var helloPeople2 = people2.map((item) => { return item + ' Ok~' })

helloPeople2.subscribe(console.log);


/* operators */
/* map */
let maps1 = Rx.Observable.interval(1000);
let r1 = maps1.map(x => x + 1);
// r1.subscribe(console.log);

/* mapTo */

let maps2 = Rx.Observable.interval(1000);
let r2 = maps2.mapTo('hello');
// r2.subscribe(console.log);

/* filter */
let f1 = Rx.Observable.interval(1000);
let r3 = f1.filter(x => x % 2 === 0);
// r3.subscribe(console.log);

/* take */
let t1 = Rx.Observable.interval(1000);
let r4 = t1.take(3);
/* r4.subscribe({
    next: (value) => {console.log(value)},
    complete: ()=>console.log('complete!')
}) */

/* first==take(1) */
let f2 = Rx.Observable.interval(1000);
let r5 = f2.first();
/* r5.subscribe({
    next: (value) => { console.log(value) },
    complete: () => console.log('complete!')
}) */

/* takeUntil */
let tx = Rx.Observable.interval(1000);
let tk = Rx.Observable.timer(3000, 1000).take(1);
let r6 = tx.takeUntil(tk);
/* r6.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
}) */

/* concatAll */
// let c1 = Rx.Observable.fromEvent(document.body, 'click');
let c1 = Rx.Observable.interval(1000);
let c2 = c1.map(x => Rx.Observable.of(1, 2, 3));
var example = c2.concatAll();
/* example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
}); */

let obs1 = Rx.Observable.interval(1000).take(5);
let obs2 = Rx.Observable.interval(500).take(3);
let obs3 = Rx.Observable.interval(2000).take(2);

let sample = Rx.Observable.of(obs1, obs2, obs3);
sample.concatAll().subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});