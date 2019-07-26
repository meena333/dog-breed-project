import { CHECK_NUMBER_OF_ANSWERS } from '../actions/checkNumberOfAnswers';

const reducer = (state = 0, action = {}) => {
    switch (action.type) {
        case CHECK_NUMBER_OF_ANSWERS:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;