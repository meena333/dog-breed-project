import { combineReducers } from "redux";
import dogbreeds from "./dogbreeds";
import dogImages from "./dogImages";
import questions from "./questions";
import numberOfAnswers from "./answers";
import numberOfCorrectAnswers from "./correctAnswers";
import gameChoice from "./gameChoice";

export default combineReducers({
  dogbreeds,
  dogImages,
  questions,
  numberOfAnswers,
  numberOfCorrectAnswers,
  gameChoice
});
