import { combineReducers } from "redux";
import dogbreeds from "./dogbreeds";
import dogImages from "./dogImages";
import questions from "./questions"

export default combineReducers({
  dogbreeds,
  dogImages,
  questions
});
