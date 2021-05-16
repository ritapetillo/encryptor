import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import cryptoReducer from "./cryptoReducer";

export default combineReducers({
  theme: themeReducer,
  crypto: cryptoReducer,
});
