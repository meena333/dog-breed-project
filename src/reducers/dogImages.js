const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case "GET_DOG_IMAGE":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
