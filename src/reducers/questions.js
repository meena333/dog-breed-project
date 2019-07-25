import { CREATE_QUESTION_GAME_1 } from '../actions/displaylist';
import { CREATE_QUESTION_GAME_2 } from '../actions/displayImages';

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case CREATE_QUESTION_GAME_1:
      return action.payload;
    case CREATE_QUESTION_GAME_2:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;