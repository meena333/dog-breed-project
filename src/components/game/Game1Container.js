import * as React from "react";
import { connect } from "react-redux";
import { getRandomDogs } from "../../actions/displaylist";
import { checkNumberOfAnswers, checkNumberOfCorrectAnswers } from "../../actions/checkNumberOfAnswers";
import Game1 from "./Game1";

class Game1Container extends React.Component {
  state = { selectedOption: "" }
  
  componentDidMount() {
    this.props.getRandomDogs();
  }

  handleSubmit = event => {
    event.preventDefault();

    const { correctAnswer } = this.props.questions;
    const { numberOfAnswers, numberOfCorrectAnswers } = this.props;

    if (this.state.selectedOption === correctAnswer) {
      alert("You have the correct answer!");
      this.props.checkNumberOfAnswers(numberOfAnswers);
      this.props.checkNumberOfCorrectAnswers(numberOfCorrectAnswers);

      if (this.props.gameChoice === 1) {
        this.props.getRandomDogs();
      }

      if (this.props.renderGame3Bool !== undefined) {
        const bool = this.props.renderGame3Bool()
        if (bool) {
            this.props.getRandomDogs();
        }
      }
    } 

    else if (this.state.selectedOption === "") {
      alert("Please choose an option");
    } 

    else {
      alert(`Wrong answer! It's ${correctAnswer}`);
      this.props.checkNumberOfAnswers(numberOfAnswers);

      if (this.props.gameChoice === 1) {
        setTimeout(() => this.props.getRandomDogs(), 2000);
      }

      if (this.props.renderGame3Bool !== undefined) {
        const bool = this.props.renderGame3Bool()
        if (bool) {
          setTimeout(() => this.props.getRandomDogs(), 2000);
        }
      }
    }
  }

  handleOptionChange = event => {
    this.setState({
      selectedOption: event.target.value
    });
  }

  render() {
    const { dogbreeds, correctAnswer, dogImages } = this.props.questions;
    const { numberOfAnswers, numberOfCorrectAnswers } = this.props;

    if (!this.props) return "Loading...";

    if (!correctAnswer) return "Loading...";
    if (correctAnswer) {
      return (
        <Game1
          dogbreeds={dogbreeds}
          correctAnswer={correctAnswer}
          numberOfAnswers={numberOfAnswers}
          numberOfCorrectAnswers={numberOfCorrectAnswers}
          dogImages={dogImages}
          handleSubmit={this.handleSubmit}
          handleOptionChange={this.handleOptionChange}
        />
      );
    }
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
      questions: state.questions,
      numberOfAnswers: state.numberOfAnswers,
      numberOfCorrectAnswers: state.numberOfCorrectAnswers,
      dogImages: state.dogImages
  };
};

export default connect(
  mapStateToProps,
  { getRandomDogs, checkNumberOfAnswers, checkNumberOfCorrectAnswers }
)(Game1Container);
