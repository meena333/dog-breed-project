export const SHOW_NUMBER_OF_ANSWERS = "SHOW_NUMBER_OF_ANSWERS";
export const CHECK_CORRECT_ANSWERS = "CHECK_CORRECT_ANSWERS";

export function showNumberOfAnswers(numberOfAnswers) {
  return {
    type: SHOW_NUMBER_OF_ANSWERS,
    payload: numberOfAnswers + 1
  };
}

export function showNumberOfCorrectAnswers(numberOfCorrectAnswers) {
  return {
    type: CHECK_CORRECT_ANSWERS,
    payload: numberOfCorrectAnswers + 1
  };
}
