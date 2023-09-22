import { combineReducers } from "redux";
import counterReducer from "./counter";
import loginReducer from "./isLogged";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loginReducer,
});

export default allReducers;
