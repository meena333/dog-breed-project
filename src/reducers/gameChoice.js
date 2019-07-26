import { CHECK_GAME_CHOICE } from '../actions/checkGameChoice';

const reducer = (state = 0, action = {}) => {
    console.log('action test:',action)
    switch (action.type) {
        case CHECK_GAME_CHOICE:
            console.log('action.payload test:', action.payload)
            return action.payload;
        default:
            return state;
    }
};

export default reducer;