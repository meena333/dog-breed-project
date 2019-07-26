import * as React from "react";
import { connect } from "react-redux";
import { getRandomBreedsImages } from "../../actions/displayImages";
import { checkNumberOfAnswers, checkNumberOfCorrectAnswers } from "../../actions/checkNumberOfAnswers";
import Game2 from "./Game2";

class Game2Container extends React.Component {
    state = { selectedOption: "" }
    
    componentDidMount() {
        this.props.getRandomBreedsImages();
    }

    handleSubmit = event => {
        event.preventDefault();

        const { images, correctAnswerGame2 } = this.props.questions;
        const { numberOfAnswers, numberOfCorrectAnswers } = this.props;

        if (this.state.selectedOption === correctAnswerGame2) {
            alert("You have the correct answer!");
            this.props.checkNumberOfAnswers(numberOfAnswers);
            this.props.checkNumberOfCorrectAnswers(numberOfCorrectAnswers);

            if (this.props.gameChoice === 2) {
                this.props.getRandomBreedsImages();
            }

            if (this.props.renderGame3Bool !== undefined) {
                const bool = this.props.renderGame3Bool()
                if (!bool) {
                    this.props.getRandomBreedsImages();
                }
            }

        } else if (this.state.selectedOption === "") {
            alert("Please choose an option");

        } else {
            const correctAnswerPosition = images.indexOf(correctAnswerGame2) + 1

            if (images) {
                alert(`Wrong answer! It's image ${correctAnswerPosition}`);
            }

            this.props.checkNumberOfAnswers(numberOfAnswers);

            if (this.props.gameChoice === 2) {
                setTimeout(() => this.props.getRandomBreedsImages(), 2000);
            }

            if (this.props.renderGame3Bool !== undefined) {
                const bool = this.props.renderGame3Bool()
                if (!bool) {
                    setTimeout(() => this.props.getRandomBreedsImages(), 2000);
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
        const { dogName, images } = this.props.questions
        const { numberOfAnswers, numberOfCorrectAnswers } = this.props

        if (!this.props) return "Loading...";

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
        numberOfCorrectAnswers: state.numberOfCorrectAnswers,
        gameChoice: state.gameChoice
    };
};

export default connect(
    mapStateToProps,
    { getRandomBreedsImages, checkNumberOfAnswers, checkNumberOfCorrectAnswers }
)(Game2Container);
