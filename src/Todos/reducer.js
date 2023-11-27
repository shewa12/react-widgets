import { combineReducers } from "redux";
import filtersReducer from "./features/filters/filtersSlice";
import todosReducer from "./features/todos/todosSlice";

// function rootReducer(state = {}, action) {
//   return {
//     todos: todosReducer,
//     filters: filtersReducer
//   }
// }

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filtersReducer,
});

export default rootReducer;