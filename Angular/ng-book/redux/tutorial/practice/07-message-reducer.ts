import { Action, Reducer, Store } from "./lib/miniRedux";

interface AppState {
  messages: Array<string>;
}

interface AddMessageAction extends Action {
  message: string;
}

interface DeleteMessageAction extends Action {
  index: number;
}

let msgReducer: Reducer<AppState> = (
  state: AppState,
  action: Action
): AppState => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        messages: state.messages.concat((<AddMessageAction>action).message)
      };
    case "DELETE_MESSAGE":
      let idx = (<DeleteMessageAction>action).index;
      return {
        messages: [
          ...state.messages.slice(0, idx),
          ...state.messages.slice(idx + 1, state.messages.length)
        ]
      };
    default:
      return state;
  }
};

//create a new store
let msgStore = new Store<AppState>(msgReducer, { messages: [] });

console.log(msgStore.getState());

msgStore.dispatch({
  type: "ADD_MESSAGE",
  message: "what the fuck?"
} as AddMessageAction);
msgStore.dispatch({
  type: "ADD_MESSAGE",
  message: "what the fuck2?"
} as AddMessageAction);
msgStore.dispatch({
  type: "ADD_MESSAGE",
  message: "what the fuck3?"
} as AddMessageAction);

console.log(msgStore.getState());

msgStore.dispatch({ type: "DELETE_MESSAGE", index: 0 } as DeleteMessageAction);

console.log(msgStore.getState());

msgStore.dispatch({ type: "DELETE_MESSAGE", index: 0 } as DeleteMessageAction);

console.log(msgStore.getState());
// ->
// { messages: [] }
// { messages: [ 'what the fuck?', 'what the fuck2?', 'what the fuck3?' ] }
// { messages: [ 'what the fuck2?', 'what the fuck3?' ] }
// { messages: [ 'what the fuck3?' ] }
