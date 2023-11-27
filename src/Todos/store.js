import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "./reducer";

let preloadedState;

const todos = localStorage.getItem('todos');
if (todos) {
    preloadedState = {
        todos: JSON.parse(todos),
    }
}

const {print1, print2, print3} = {print1: 1, print2: 2, print3: 3};

const testMiddleware = applyMiddleware(print1, print2, print3);

const store = legacy_createStore(rootReducer, preloadedState);

export default store;