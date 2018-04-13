import { AppState } from "./app.state";
import { counterReducer as reducer } from "./counter.reducer";
import { createStore, compose, Store, StoreEnhancer } from "redux";
import { InjectionToken } from "@angular/core";

export const AppStore = new InjectionToken("App.store");

const devtools: StoreEnhancer<AppState> = window["devToolsExtension"]
  ? window["devToolsExtension"]()
  : f => f;

export function createAppStore(): Store<AppState> {
  return createStore<AppState>(reducer, compose(devtools));
}

export const appStoreProviders = [
  {
    provide: AppStore,
    useFactory: createAppStore
  }
];
