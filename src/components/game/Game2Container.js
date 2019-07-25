import * as React from "react";
import { connect } from "react-redux";
import { getRandomBreedsImages } from "../../actions/displayImages";
import Game2 from "./Game2";

class Game2Container extends React.Component {
    componentDidMount() {
        this.props.getRandomBreedsImages();
    }

    render() {
        console.log("GAME2 CONTAINER PROPS", this.props)

        const { dogName, images, correctAnswer } = this.props.questions;
        if (!this.props) return "Loading...";
        return <Game2 dogName={dogName} images={images} correctAnswer={correctAnswer} getRandomBreedsImages={this.props.getRandomBreedsImages} />;
    }
}

const mapStateToProps = state => {
    return { questions: state.questions };
};

export default connect(
    mapStateToProps,
    { getRandomBreedsImages }
)(Game2Container);
