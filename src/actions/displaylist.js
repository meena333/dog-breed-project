import * as request from "superagent";

export const GET_DOGS = "GET_DOGS";

export function showList(dogs) {
  return {
    type: GET_DOGS,
    payload: dogs
  };
}

export function getDogs() {
  return function(dispatch) {
    request("https://dog.ceo/api/breeds/list/all").then(response => {
      const result = Object.keys(response.body.message);
      dispatch(showList(result));
    });
  };
}
