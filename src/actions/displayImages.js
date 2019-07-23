import * as request from "superagent";

export const GET_DOG_IMAGE = "GET_DOG_IMAGE";

export function showImage(breedImages) {
  return {
    type: GET_DOG_IMAGE,
    payload: breedImages
  };
}

export function getDogImages(breedName) {
  return function (dispatch) {
    request(
      `https://dog.ceo/api/breed/${encodeURIComponent(breedName)}/images/random/10`)
      .then(response => {
      const result = response.body.message;
      dispatch(showImage(result));
    });
  };
}

export function getDogImage(breedName) {
  return function (dispatch) {
    request(
      `https://dog.ceo/api/breed/${encodeURIComponent(breedName)}/images/random/1`)
      .then(response => {
      const result = response.body.message;
      dispatch(showImage(result));
    });
  };
}