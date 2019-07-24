import { CREATE_QUESTION } from '../actions/displaylist';

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case CREATE_QUESTION:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;