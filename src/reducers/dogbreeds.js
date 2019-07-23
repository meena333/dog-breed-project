import {GET_DOGS} from '../actions/displaylist'

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_DOGS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
