import * as React from "react";
import { connect } from "react-redux";
import { getRandomBreedsImages } from "../../actions/displayImages";
import { checkNumberOfAnswers, checkNumberOfCorrectAnswers } from "../../actions/answers";
import Game2 from "./Game2";

class Game2Container extends React.Component {
    state = { selectedOption: "" }
    
    componentDidMount() {
        this.props.getRandomBreedsImages();
    }

    handleSubmit = event => {
        event.preventDefault();

        const { images, correctAnswer } = this.props.questions;
        const { numberOfAnswers, numberOfCorrectAnswers } = this.props;

        if (this.state.selectedOption === correctAnswer) {
            alert("You have the correct answer!");
            this.props.checkNumberOfAnswers(numberOfAnswers);
            this.props.checkNumberOfCorrectAnswers(numberOfCorrectAnswers);
            this.props.getRandomBreedsImages();

        } else if (this.state.selectedOption === "") {
            alert("Please choose an option");

        } else {
            const correctAnswerPosition = images.indexOf(correctAnswer) + 1
            if (images) {
                alert(`Wrong answer! It's image ${correctAnswerPosition}`);
            }
            this.props.checkNumberOfAnswers(numberOfAnswers);
            setTimeout(() => this.props.getRandomBreedsImages(), 2000);
        }
    }

    handleOptionChange = event => {
        this.setState({
            selectedOption: event.target.value
        });
    }

    render() {
        const { dogName, images } = this.props.questions
        const { numberOfAnswers, numberOfCorrectAnswers } = this.props

        if (!this.props) return "Loading...";

        // if (this.props.renderGame3Bool !== undefined) {
        //     this.props.renderGame3Bool()
        // }

        return <Game2
            dogName={dogName}
            images={images}
            numberOfAnswers={numberOfAnswers}
            numberOfCorrectAnswers={numberOfCorrectAnswers}
            handleSubmit={this.handleSubmit}
            handleOptionChange={this.handleOptionChange}
        />;
    }
}

const mapStateToProps = state => {
    return {
        questions: state.questions,
        numberOfAnswers: state.numberOfAnswers,
        numberOfCorrectAnswers: state.numberOfCorrectAnswers
    };
};

export default connect(
    mapStateToProps,
    { getRandomBreedsImages, checkNumberOfAnswers, checkNumberOfCorrectAnswers }
)(Game2Container);
