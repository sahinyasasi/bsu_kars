import { combineReducers } from "redux";
import currentUser from "./currentUserReducer";
import alert from "./alertReducer";

const rootReducer = combineReducers({
  currentUser,
  alert,
});

export default rootReducer;
