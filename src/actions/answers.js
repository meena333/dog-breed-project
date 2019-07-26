export const CHECK_NUMBER_OF_ANSWERS = "CHECK_NUMBER_OF_ANSWERS";
export const CHECK_NUMBER_OF_CORRECT_ANSWERS = "CHECK_NUMBER_OF_CORRECT_ANSWERS";

export function checkNumberOfAnswers(numberOfAnswers) {
  return {
    type: CHECK_NUMBER_OF_ANSWERS,
    payload: numberOfAnswers + 1
  };
}

export function checkNumberOfCorrectAnswers(numberOfCorrectAnswers) {
  return {
    type: CHECK_NUMBER_OF_CORRECT_ANSWERS,
    payload: numberOfCorrectAnswers + 1
  };
}
