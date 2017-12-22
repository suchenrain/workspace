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