import { IncAndDec } from "./Perform/IncDec";
import { MulAndDiv } from "./Perform/DivMul";
import { combineReducers } from "redux";

export const RootReducer = combineReducers({
  IncAndDec,
  MulAndDiv,
});
