import * as request from "superagent";
import {getRandomDogName, makeArrayOfRandomDogs} from './displaylist'

export const GET_DOG_IMAGE = "GET_DOG_IMAGE";
export const CREATE_QUESTION_GAME_2 = "CREATE_QUESTION_GAME_2"

//1. have list of dogs
// 2. generate 3 random dogs
//3. generate urls for each of the 3 dogs
// 4. have a correct answer (dogName)
//5. generate url for correct answer
//6. display

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

// export function getRandomBreedsImages() {
//   return function (dispatch) {
//     request(
//       `https://dog.ceo/api/breeds/image/random/3`)
//       .then(response => {
//         const url = response.body.message;
//         const correctAnswer = getRandomDogImage(url);
//         const dogName = getNameFromImage(correctAnswer)
//         dispatch(createQuestionGame2(url, dogName, correctAnswer))
//       });
//   };
// }
// export function getDogImage(breedName) {
//   return function () {
//     console.log('hello')
//     request(
//       `https://dog.ceo/api/breed/${encodeURIComponent(breedName)}/images/random/1`)
//       .then(response => {
        
//         const url = response.body.message;
//         console.log('url',url)
//         //dispatch(showImage(url));
//       });
//   };
// }

// export function getDogImage(breedName) {
//   return function (dispatch) {
//     request(
//       `https://dog.ceo/api/breed/${encodeURIComponent(breedName)}/images/random/1`)
//       .then(response => {
//         console.log('nice to meet you')
//         const url = response.body.message;
//         dispatch(showImage(url));
//       });
//   };
// }

// export const getDogImage = function(breedName){
//   console.log('not funny')
//     return async function (dispatch) {
//       console.log('hello world')
//           const response =await request(`https://dog.ceo/api/breed/${encodeURIComponent(breedName)}/images/random/1`)
//           const url = response.body.message;
//           console.log('url getDogImage', url)
//           dispatch(showImage(url));
//         };
//     };
  

// export function getRandomDogs() {
//   return function(dispatch) {
//     request("https://dog.ceo/api/breeds/list/all")
//     .then (response => {
//       const dogbreeds = Object.keys(response.body.message);
//       const randomDogs = makeArrayOfRandomDogs(3, dogbreeds);
//       const randombreed = getRandomDogName(randomDogs);
      
//       //dispatch(createQuestionGame1(randomDogs, randombreed));
//     });
//   };
// }

async function getImage(breedName){
  const response = await request(`https://dog.ceo/api/breed/${encodeURIComponent(breedName)}/images/random/1`)
  const url = response.body.message;
  console.log('url',url[0])
  return url[0]
}

export function getDogImage(breedName) {
  console.log('bye')
  return async function (dispatch) {
    console.log('hello world')
        const url = await getImage(breedName);
        console.log('url getDogImage', url)
        dispatch(showImage(url));
      };
  };
  
export function getRandomBreedsImages() {
  return async function(dispatch) {
      const response = await request("https://dog.ceo/api/breeds/list/all")
      const dogbreeds = Object.keys(response.body.message);
      const randomDogs = makeArrayOfRandomDogs(3, dogbreeds);
      console.log('randomDogs',randomDogs)
      const dogName = getRandomDogName(randomDogs);
      const correctAnswer = await getImage(dogName)
      const arrayImages = await Promise.all(randomDogs.map(dog => getImage(dog)))
      console.log('this is the array',arrayImages)
      await dispatch(createQuestionGame2(arrayImages, dogName, correctAnswer));
    }
  }