// const Rx = require('rxjs/Rx');

const dragDOM = document.getElementById('drag');
const body = document.body;

const mouseDown = Rx.Observable.fromEvent(dragDOM, 'mousedown');
const mouseUp = Rx.Observable.fromEvent(body, 'mouseup');
const mouseMove = Rx.Observable.fromEvent(body, 'mousemove');

mouseDown.map(event => mouseMove.takeUntil(mouseUp))
    .concatAll()
    .map(m => ({ x: m.clientX, y: m.clientY }))
    .subscribe(pos => {
        dragDOM.style.left = pos.x + 'px';
        dragDOM.style.top = pos.y + 'px';
    })