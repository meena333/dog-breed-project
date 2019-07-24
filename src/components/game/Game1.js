import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  showNumberOfAnswers,
  showNumberOfCorrectAnswers
} from "../../actions/answers";

export class Game1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      correctAnswer,
      numberOfAnswers,
      numberOfCorrectAnswers,
      getRandomDogs
    } = this.props;

    if (this.state.selectedOption === correctAnswer) {
      alert("You have the correct answer!");
      this.props.showNumberOfAnswers(numberOfAnswers);
      this.props.showNumberOfCorrectAnswers(numberOfCorrectAnswers);

      getRandomDogs();
    } else if (this.state.selectedOption === "") {
      alert("Please choose an option");
    } else {
      alert(`Wrong answer! It's ${correctAnswer}`);
      this.props.showNumberOfAnswers(numberOfAnswers);
      getRandomDogs();
    }
  }

  handleOptionChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  render() {
    const { dogs, correctAnswer, dogImages } = this.props;

    console.log("GAME1 PROPS", this.props);

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
  return {
    ...state,
    numberOfAnswers: state.answers,
    numberOfCorrectAnswers: state.correctAnswers
  };
};

export default connect(
  mapStateToProps,
  { showNumberOfAnswers, showNumberOfCorrectAnswers }
)(Game1);
