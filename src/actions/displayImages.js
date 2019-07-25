import * as request from "superagent";

export const GET_DOG_IMAGE = "GET_DOG_IMAGE";
export const CREATE_QUESTION_GAME_2 = "CREATE_QUESTION_GAME_2"

function createQuestionGame2(images, dogName, correctAnswer) {
  return {
    type: CREATE_QUESTION_GAME_2,
    payload: { images, dogName, correctAnswer }
  };
}

function showImage(breedImages) {
  return {
    type: GET_DOG_IMAGE,
    payload: breedImages
  };
}

function getRandomDogImage(dogsImagesArray) {
  return dogsImagesArray[Math.floor(Math.random() * dogsImagesArray.length)];
}

function getNameFromImage(url) {
  return url.split('/')[4];
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

export function getRandomBreedsImages() {
  return function (dispatch) {
    request(
      `https://dog.ceo/api/breeds/image/random/3`)
      .then(response => {
      const url = response.body.message;
      const correctAnswer = getRandomDogImage(url);
      const dogName = getNameFromImage(correctAnswer)
      dispatch(createQuestionGame2(url, dogName, correctAnswer))
    });
  };
}

export function getDogImage(breedName) {
  return function (dispatch) {
    request(
      `https://dog.ceo/api/breed/${encodeURIComponent(breedName)}/images/random/1`)
      .then(response => {
      const url= response.body.message;
      dispatch(showImage(url));
    });
  };
}