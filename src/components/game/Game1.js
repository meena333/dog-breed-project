import * as React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

export function Game1(props) {
  const { dogs, correctAnswer, dogImages } = props
  console.log("dogs", dogs)
  console.log("correct answer", correctAnswer)
  console.log("dog images", dogImages)

  function handleSubmit(event) {

  }

  function updateSelection(event) {
    // if (event.target.selectedAnswer === correctAnswer) {
    //   console.log("true")
    // }
    // else {
    //   console.log("false")
    // }
  }

  return (
    <div className="Game1-content">
      <h1>Guess who's here?</h1>
      <Link to="/">Go back to the index</Link>
      <br />
      <br />
      <div className="Dog-images">
        {dogImages && <img src={dogImages} alt="Dog" />}
        {!dogImages && "Loading..."}
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="Answers">
          {dogs.map(dog => {
            return (
              <div key={dog}>
                <input type="radio" id={dog} name={dog}></input>
                <label htmlFor={dog}>{dog}</label>
              </div>
            )
          })}
          <br />
          <button onClick={() => handleSubmit}>Submit Answer</button>
        </div>
      </form>
    </div>
  )

}

const mapStateToProps = state => {
  return { ...state }
}

export default connect(mapStateToProps)(Game1)