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
    case "PLUS":
      return state + action.payload;
    default:
      return state;
  }
};

console.log(reducer(3, { type: "PLUS", payload: 7 }));
console.log(reducer(3, { type: "PLUS", payload: 1000 }));
console.log(reducer(3, { type: "PLUS", payload: -2 }));
