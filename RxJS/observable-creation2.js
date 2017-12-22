const Rx = require('rxjs/Rx')

var observer = {
    next: (value) => {
        console.log(value);
    },
    error: (error) => {
        console.log('Error:' + error);
    },
    complete: () => {
        console.log('complete!');
    }
}

/* of */
var observable = Rx.Observable.of('Jenny', 'Anne');
observable.subscribe(observer);

/* from */
var array = ["test", "hha", "ok", "123"];
var observable2 = Rx.Observable.from(array);
observable2.subscribe(observer);

var source = Rx.Observable.from('铁人赛');
source.subscribe(observer);

var observable3 = Rx.Observable.from(new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello RxJS!');
    }, 2000);
}));
observable3.subscribe(observer);

var observable4 = Rx.Observable.from(new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('hello RxJS!');
    }, 4000);
}));
observable4.subscribe(observer);

/* fromEvent */
/* var observable5 = Rx.Observable.fromEvent(document.body, 'click');
observable5.subscribe(observer); */

/* empty never throw */
var observable6=Rx.Observable.empty();
observable6.subscribe(observer);

var observable7=Rx.Observable.never();
observable7.subscribe(observer);

var observable8=Rx.Observable.throw('Oops!');
observable8.subscribe(observer);


/* interval timer */
var observable9=Rx.Observable.interval(1000);
var subscription9=observable9.subscribe(observer);

var observerble10=Rx.Observable.timer(5000,2000);
var subscription10=observerble10.subscribe(observer);

setTimeout(() => {
    subscription9.unsubscribe();
    subscription10.unsubscribe();
}, 10000);