import * as React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { showNumberOfAnswers, showNumberOfCorrectAnswers } from "../../actions/answers"
import { renderQuestion } from "../../actions/displaylist"

export class Game1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      selectedOption: "",
    }
    // console.log("initialState", this.state)

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    const { correctAnswer, numberOfAnswers, numberOfCorrectAnswers } = this.props
    const { render } = this.props

    if (this.state.selectedOption === correctAnswer) {
      alert("You have the correct answer!")
      this.props.showNumberOfAnswers(numberOfAnswers)
      this.props.showNumberOfCorrectAnswers(numberOfCorrectAnswers)
      this.props.renderQuestion(true)

      // window.location.reload()
      // this.setState({
      //   ...this.state,
      //   numberOfCorrectAnswers: numberOfCorrectAnswers + 1
      // })
      // console.log("number of correct answers", this.state.numberOfCorrectAnswers)
    }
    else if (this.state.selectedOption === "") {
      alert("Please choose an option")
    }
    else {
      alert(`Wrong answer! It's ${correctAnswer}`)
      this.props.showNumberOfAnswers(numberOfAnswers)
      this.props.renderQuestion(true)
      // setTimeout(function(){
      //   window.location.reload()
      // }, 2000)
    }
  }

  handleOptionChange(event) {
    this.setState({
      selectedOption: event.target.value
    })
    // console.log("STATE", this.state)

  }

  render() {
    const { dogs, correctAnswer, dogImages } = this.props;
    console.log("dogs", dogs);
    console.log("correct answer", correctAnswer);
    console.log("dog images", dogImages);

    console.log("GAME1 PROPS", this.props)

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
        <form onSubmit={this.handleSubmit}>
          <div className="Answers">
            {dogs.map(dog => {
              return (
                <div key={dog}>
                  <input
                    type="radio"
                    id={dog}
                    name="dogbreed"
                    value={dog}
                    onChange={this.handleOptionChange}
                  />
                  <label htmlFor={dog}>{dog}</label>
                </div>
              );
            })}
            <br />
            <button onClick={() => this.handleSubmit}>Submit Answer</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state, numberOfAnswers: state.answers, numberOfCorrectAnswers: state.correctAnswers }
}

export default connect(mapStateToProps, {showNumberOfAnswers, showNumberOfCorrectAnswers, renderQuestion})(Game1)
