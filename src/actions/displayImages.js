import * as request from "superagent";
import {makeArrayOfRandomDogs} from './displaylist'

export const GET_DOG_IMAGE = "GET_DOG_IMAGE";
export const CREATE_QUESTION_GAME_2 = "CREATE_QUESTION_GAME_2"

function createQuestionGame2(images, dogName, correctAnswerGame2) {
  return {
    type: CREATE_QUESTION_GAME_2,
    payload: { images, dogName, correctAnswerGame2 }
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

async function getImage(breedName) {
  const response = await request(`https://dog.ceo/api/breed/${encodeURIComponent(breedName)}/images/random/1`)
  const url = response.body.message;
  return url[0]
}

export function getDogImage(breedName) {
  return async function (dispatch) {
    const url = await getImage(breedName);
    dispatch(showImage(url));
  };
};

export function getRandomBreedsImages() {
  return async function (dispatch) {
    const response = await request("https://dog.ceo/api/breeds/list/all")
    const dogbreeds = Object.keys(response.body.message);
    const randomDogs = makeArrayOfRandomDogs(3, dogbreeds);
    const arrayImages = await Promise.all(randomDogs.map(dog => getImage(dog)))
    const correctAnswer = getRandomDogImage(arrayImages)
    const dogName = getNameFromImage(correctAnswer)
    dispatch(createQuestionGame2(arrayImages, dogName, correctAnswer));
  }
}