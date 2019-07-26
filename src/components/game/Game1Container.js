import * as React from "react";
import { connect } from "react-redux";
import { getRandomDogs } from "../../actions/displaylist";
import Game1 from "./Game1";
import { getDogImage } from "../../actions/displayImages";

class Game1Container extends React.Component {
  componentDidMount() {
    this.props.getRandomDogs();
  }

  render() {
    const { dogbreeds, correctAnswerGame1 } = this.props.questions;

    if (!correctAnswerGame1) return "Loading1...";
    this.props.getDogImage(correctAnswerGame1);

    if (!this.props) return "Loading...";
    return (
      <Game1
        dogbreeds={dogbreeds}
        correctAnswer={correctAnswerGame1}
        getRandomDogs={this.props.getRandomDogs}
        renderGame3Bool={this.props.renderGame3Bool}
        gameBool={this.props.gameBool}
      />
    );
  }
}

const mapStateToProps = state => {
  return { questions: state.questions };
};

export default connect(
  mapStateToProps,
  { getRandomDogs, getDogImage }
)(Game1Container);



// import * as React from "react";
// import { connect } from "react-redux";
// import { getRandomDogs } from "../../actions/displaylist";
// import { getDogImage } from "../../actions/displayImages";
// import { checkNumberOfAnswers, checkNumberOfCorrectAnswers } from "../../actions/checkNumberOfAnswers";
// import Game1 from "./Game1";

// class Game1Container extends React.Component {
//   state = { selectedOption: "" }
  
//   componentDidMount() {
//     this.props.getRandomDogs();
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     const { correctAnswer } = this.props.questions;
//     const { numberOfAnswers, numberOfCorrectAnswers } = this.props;

//     if (this.state.selectedOption === correctAnswer) {
//       alert("You have the correct answer!");
//       this.props.checkNumberOfAnswers(numberOfAnswers);
//       this.props.checkNumberOfCorrectAnswers(numberOfCorrectAnswers);
//       this.props.getRandomDogs();
//     } 

//     else if (this.state.selectedOption === "") {
//       alert("Please choose an option");
//     } 

//     else {
//       alert(`Wrong answer! It's ${correctAnswer}`);
//       this.props.checkNumberOfAnswers(numberOfAnswers);
//       setTimeout(() => this.props.getRandomDogs(), 2000);
//     }
//   }

//   handleOptionChange = event => {
//     this.setState({
//       selectedOption: event.target.value
//     });
//   }

//   render() {
//     const { dogbreeds, correctAnswer } = this.props.questions;
//     const { numberOfAnswers, numberOfCorrectAnswers } = this.props;

//     if (!this.props) return "Loading...";

//     if (!correctAnswer) return "Loading...";
//     if (correctAnswer) return this.props.getDogImage(correctAnswer);

//     // if (this.props.renderGame3Bool !== undefined) {
//     //   this.props.renderGame3Bool()
//     // }

//     return (
//       <Game1
//         dogbreeds={dogbreeds}
//         correctAnswer={correctAnswer}
//         numberOfAnswers={numberOfAnswers}
//         numberOfCorrectAnswers={numberOfCorrectAnswers}
//         handleSubmit={this.handleSubmit}
//         handleOptionChange={this.handleOptionChange}
//       />
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//       questions: state.questions,
//       numberOfAnswers: state.numberOfAnswers,
//       numberOfCorrectAnswers: state.numberOfCorrectAnswers
//   };
// };

// export default connect(
//   mapStateToProps,
//   { getRandomDogs, getDogImage, checkNumberOfAnswers, checkNumberOfCorrectAnswers }
// )(Game1Container);
