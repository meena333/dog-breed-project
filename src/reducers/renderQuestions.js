import { RENDER } from '../actions/displaylist';

const reducer = (state = false, action = {}) => {
    switch (action.type) {
        case RENDER:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;