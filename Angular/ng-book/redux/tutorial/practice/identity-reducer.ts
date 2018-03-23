interface Action {
  type: string;
  payload?: any;
}

interface Reducer<T> {
  (state: T, action: Action): T;
}

let reducer: Reducer<number> = (state: number, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
let unknowAction: Action = { type: "UNKNOW" };
console.log(reducer(0, unknowAction));

let incrementAction: Action = { type: "INCREMENT" };
console.log(reducer(0, incrementAction));

let decrementAction: Action = { type: "DECREMENT" };
console.log(reducer(200, decrementAction));
