import { AsyncStorage } from "react-native";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import lists from "./lists";

const reducers = combineReducers({
  lists
});

const store = createStore(reducers, applyMiddleware(thunk));

store.subscribe(() =>
  AsyncStorage.setItem("todo_lists", JSON.stringify(store.getState()))
);

export default store;
