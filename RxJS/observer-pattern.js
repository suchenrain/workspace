/* ES5 */
function Producer() {
    //
    if (!(this instanceof Producer)) {
        throw new Error("please use new Producer()!")
    }
    this.listeners = [];
}

Producer.prototype.addListener = function (listener) {
    if (typeof listener === 'function') {
        this.listeners.push(listener);
    }
    else {
        throw new Error('listener must be a function');
    }
}

Producer.prototype.removeListener = function (listener) {
    this.listeners.splice(this.listeners.indexOf(listener), 1);
}

Producer.prototype.notify = function (message) {
    this.listeners.forEach(listener => listener(message));
}

/* ES6 */
/* class Producer {
    constructor() {
        this.listeners = [];
    }

    addListener(listener) {
        if (typeof listener === 'function') {
            this.listeners.push(listener);
        }
        else {
            throw new Error('listener must be a function');
        }
    }

    removeListener(listener) {
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    }

    notify(message) {
        this.listeners.forEach(listener => listener(message));
    }
} */


/* test */
let egghead = new Producer();

function listener1(message) {
    console.log(message + ' from listener1!');
}

function listener2(message) {
    console.log(message + ' from listener2!');
}

egghead.addListener(listener1);
egghead.addListener(listener2);

egghead.notify("hha");
