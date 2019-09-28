import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
  cntRed: counterReducer,
  data: dataReducer
});

export default rootReducer;
