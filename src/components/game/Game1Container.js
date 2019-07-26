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
      this.props.getRandomDogs();
    } 

    else if (this.state.selectedOption === "") {
      alert("Please choose an option");
    } 

    else {
      alert(`Wrong answer! It's ${correctAnswer}`);
      this.props.checkNumberOfAnswers(numberOfAnswers);
      setTimeout(() => this.props.getRandomDogs(), 2000);
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
    console.log('game 1 props', this.props)
    console.log('correct answer',correctAnswer)

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
