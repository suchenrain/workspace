import { Action, ActionCreator } from "redux";

export const INCREMENT: string = "INCREMENT";
export const increment: ActionCreator<Action> = () => {
  return { type: INCREMENT };
};

export const DECREMENT: string = "DECREMENT";
export const decrement: ActionCreator<Action> = () => {
  return { type: DECREMENT };
};
