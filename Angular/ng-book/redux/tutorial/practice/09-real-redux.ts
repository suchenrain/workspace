import { Action, Reducer, Store, createStore } from "redux";

interface AppState {
  messages: Array<string>;
}

interface AddMessageAction extends Action {
  message: string;
}

interface DeleteMessageAction extends Action {
  index: number;
}

class MessageActions {
  static addMessage(message: string): AddMessageAction {
    return {
      type: "ADD_MESSAGE",
      message: message
    };
  }

  static deleteMessage(index: number): DeleteMessageAction {
    return {
      type: "DELETE_MESSAGE",
      index: index
    };
  }
}
let initialState:AppState={messages:[]};
let initialState2:AppState={messages:['i love u']};
let msgReducer: Reducer<AppState> = (
  state: AppState=initialState2,
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
let msgStore = createStore<AppState>(msgReducer);

console.log(msgStore.getState());

msgStore.dispatch(MessageActions.addMessage("what the fuck1 !"));
msgStore.dispatch(MessageActions.addMessage("what the fuck2 !"));
msgStore.dispatch(MessageActions.addMessage("what the fuck3 !"));

console.log(msgStore.getState());

msgStore.dispatch(MessageActions.deleteMessage(1));

console.log(msgStore.getState());

msgStore.dispatch(MessageActions.deleteMessage(1));
console.log(msgStore.getState());
// ->
// { messages: [ 'i love u' ] }
// { messages:
//    [ 'i love u',
//      'what the fuck1 !',
//      'what the fuck2 !',
//      'what the fuck3 !' ] }
// { messages: [ 'i love u', 'what the fuck2 !', 'what the fuck3 !' ] }
// { messages: [ 'i love u', 'what the fuck3 !' ] }
