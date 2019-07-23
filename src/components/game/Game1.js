import * as React from "react";
import { Link } from "react-router-dom";
import {getRandomDogName} from '../../actions/displaylist'
import { connect } from "react-redux";
import {getImage} from '../../actions/displayImages'

function Game1(props) {
  const image = props.img
  console.log('image game 1', image)
  // const dogs = props.dogs
  // console.log('props.dogs',props.dogs)
  // console.log(getRandomDogName(dogs))
  // const correctAnswer = getRandomDogName(dogs)
  // const image = ()=> getImage(correctAnswer)
  // console.log('image',image)

  return (
    <div>
      <h1>Game 1</h1>
      <Link to="/">Go back to the index</Link>

      <div>
        {image && <img src={image} alt="Dog"/>}
        {!image && "Loading..."}
        {/* There are {dogs.length} dog breeds.
        <ul>
        {dogs.map(dog => {
          return <li key={dog}>{dog}</li>;
        })}
        <li />
      </ul> */}
      </div>
    </div>
  );
}
export default connect(
  null,
  { getImage, getRandomDogName }
)(Game1);
