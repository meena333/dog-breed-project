import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
    showNumberOfAnswers,
    showNumberOfCorrectAnswers
} from "../../actions/answers";
import Scoreboard from "../Scoreboard";

class Game2 extends React.Component {
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
            images,
            correctAnswer,
            numberOfAnswers,
            numberOfCorrectAnswers,
            getRandomBreedsImages
        } = this.props;

        if (this.state.selectedOption === correctAnswer) {
            alert("You have the correct answer!");
            this.props.showNumberOfAnswers(numberOfAnswers);
            this.props.showNumberOfCorrectAnswers(numberOfCorrectAnswers);
            getRandomBreedsImages();
        } else if (this.state.selectedOption === "") {
            alert("Please choose an option");
        } else {
            const correctAnswerPosition = images.indexOf(correctAnswer) + 1
            if (images) {
                alert(`Wrong answer! It's image ${correctAnswerPosition}`);
            }
            this.props.showNumberOfAnswers(numberOfAnswers);
            setTimeout(() => getRandomBreedsImages(), 2000);
        }
    }

    handleOptionChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }

    render() {
        const { dogName, images } = this.props;
        console.log("GAME2 PROPS", this.props);
        console.log('correct answer', this.props.correctAnswer)
        console.log('dogName', dogName)

        return (
            <div className="Game2-content">
                <h1>What do I look like?</h1>
                <Link to="/">Go back to the index</Link>
                <br />
                <br />
                <Scoreboard
                    total={this.props.numberOfAnswers}
                    correct={this.props.numberOfCorrectAnswers}
                />
                <br />
                <div className="Dog-name">
                    <h2>{dogName}</h2>
                </div>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <div className="Dog-images">
                        {!images && "Loading..."}
                        {images && images.map(image =>
                            <div className="Images-game2" key={image}>
                                <input type="radio" id={image} name="dogbreed" value={image} onChange={this.handleOptionChange}></input>
                                <img src={image} alt="Dog" />
                            </div>
                        )}
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
)(Game2);
