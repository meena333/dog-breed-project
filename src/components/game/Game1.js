import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"

export function Game1(props) {
  const { dogs, correctAnswer, dogImages } = props
  console.log("dogs", dogs)
  console.log("correct answer", correctAnswer)
  console.log("dog images", dogImages)

  return (
    <div>
      <h1>Game 1</h1>
      <Link to="/">Go back to the index</Link>
      <br />
      <br />
      <div>
        {dogImages && <img src={dogImages} alt="DogImage" />}
        {!dogImages && "Loading..."}
      </div>
      <ul>
        {dogs.map(dog => {
          return <li key={dog}>{dog}</li>
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { ...state }
}

export default connect(mapStateToProps)(Game1)