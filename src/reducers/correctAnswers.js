import { CHECK_CORRECT_ANSWERS } from '../actions/answers';

const reducer = (state = 0, action = {}) => {
    switch (action.type) {
        case CHECK_CORRECT_ANSWERS:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;