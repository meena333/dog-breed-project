import * as request from "superagent"

export const GET_DOGS = "GET_DOGS"
export const CREATE_QUESTION = "CREATE_QUESTION"

export function createQuestion(dogs, correctAnswer) {
  return {
    type: CREATE_QUESTION,
    payload: { dogs, correctAnswer }
  }
}

export function showList(dogs) {
  return {
    type: GET_DOGS,
    payload: dogs
  }
}

export function getRandomDogName(dogsArray) {
  return dogsArray[Math.floor(Math.random() * (dogsArray.length))]
}

export function arrayCheck(array, randomDog) {
  return array.find(dog => dog === randomDog)
}

export function makeArrayOfRandomDogs(numberOfDogs, dogsArray) {
  const array = []

  for (let i = 0; i < numberOfDogs; i++) {
    let randomDog = getRandomDogName(dogsArray)
    while (arrayCheck(array, randomDog)) randomDog = getRandomDogName(dogsArray)
    array.push(randomDog)
  }

  return array
}

export function getDogs() {
  return function (dispatch) {
    request("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        const result = Object.keys(response.body.message)
        dispatch(showList(result))
      })
  }
}

export function getRandomDogs() {
  return function (dispatch) {
    request("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        const result = Object.keys(response.body.message)
        const randomDogs = makeArrayOfRandomDogs(3, result)
        const randombreed = getRandomDogName(randomDogs)
        dispatch(createQuestion(randomDogs, randombreed))
      })
  }
}