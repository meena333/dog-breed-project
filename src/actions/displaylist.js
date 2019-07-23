import * as request from "superagent";

export const GET_DOGS = "GET_DOGS";

export function showList(dogs) {
  return {
    type: GET_DOGS,
    payload: dogs
  };
}

export function getRandomDogName(dogsArray){
  // const dogs = getDogs()
  // console.log('dogs display list', dogs)
  return dogsArray[Math.floor(Math.random()*(dogsArray.length+1))]
}

export function makeArrayOfRandomDogs(numberOfDogs, dogsArray){
   const array =[];
    for (let i=0; i<numberOfDogs; i++){
      let randomDog = getRandomDogName(dogsArray)
      array.push(randomDog)
    }
 return array
}

export function getDogs() {
  return function(dispatch) {
    request("https://dog.ceo/api/breeds/list/all").then(response => {
      const result = Object.keys(response.body.message);
      dispatch(showList(result));

    });
  };
}

export function getRandomDogs() {
  return function(dispatch) {
    request("https://dog.ceo/api/breeds/list/all").then(response => {
      const result = Object.keys(response.body.message);
      const randomDogs = makeArrayOfRandomDogs(3, result)
      console.log('makeArrayOfRandomDogs(numberOfDogs, dogsArray)',makeArrayOfRandomDogs(3, result))
      dispatch(showList(randomDogs));

    });
  };
}