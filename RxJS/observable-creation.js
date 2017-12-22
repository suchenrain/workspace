const Rx = require('rxjs/Rx');

/* var observable = Rx.Observable.create(function (observer) {
    observer.next('haha');
    observer.next('Anne');
    observer.complete();
    observer.next('not working');
}) */

var observable = Rx.Observable.create(function (observer) {
    try {
        observer.next('Jerry');
        observer.next('Anna');
        throw 'some exception';
    } catch (e) {
        observer.error(e)
    }
})

var observer = {
    next: function (value) {
        console.log(value);
    },
    error: function (error) {
        console.log('Error:' + error);
    },
    complete: function () {
        console.log('Complete！');
    }
}

observable.subscribe(observer);

/* observable.subscribe(
    value => { console.log(value); },
    error => { console.log('Error: ', error); },
    () => { console.log('complete') }
) */

