// const Rx = require('rxjs/Rx');

/* scan,buffer */
// source : ----h----e----l----l----o|
// scan((origin, next) => origin + next, '')
// example: ----h----(he)----(hel)----(hell)----(hello)|
const addBtn = document.getElementById('addButton');
const minusBtn = document.getElementById('minusButton');
const state = document.getElementById('state');

const addClick = Rx.Observable.fromEvent(addBtn, 'click').mapTo(1);
const minusClick = Rx.Observable.fromEvent(minusBtn, 'click').mapTo(-1);


const numberState = Rx.Observable.empty()
.startWith(0)
.merge(addClick, minusClick)
.scan((origin, next) => origin + next, 0);

numberState.subscribe({
    next: (value) => { state.innerHTML = value },
    error: (err) => console.log("Errror:" + err),
    complete: () => console.log("Complete!")
})