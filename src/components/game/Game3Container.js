import * as React from "react";
import Game1Container from "./Game1Container";
import Game2Container from "./Game2Container";
import { connect } from "react-redux";

class Game3Container extends React.Component {
    state = { game: false };

    renderGame3Bool = () => {
        this.setState({ game: Math.random() >= 0.5 })
    }

    render() {
        console.log("GAME3 PROPS", this.props)
        if (this.state.game) {
            return <Game1Container renderGame3Bool={this.renderGame3Bool} />
        }
        else {
            return <Game2Container renderGame3Bool={this.renderGame3Bool} />
        }
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Game3Container);