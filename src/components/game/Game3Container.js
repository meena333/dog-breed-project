import * as React from "react";
import Game1Container from "./Game1Container";
import Game2Container from "./Game2Container";
import { connect } from "react-redux";

class Game3Container extends React.Component {
    state = { game: null };

    componentDidMount() {
        this.renderGame3Bool()
    }

    renderGame3Bool = () => {
        const bool = Math.random() >= 0.5
        this.setState({ game: bool })

        return bool
    }

    render() {
        console.log("GAME3 PROPS", this.props)
        if (this.state.game) {
            return <Game1Container renderGame3Bool={this.renderGame3Bool} />
        }
        else if (this.state.game === false) {
            return <Game2Container renderGame3Bool={this.renderGame3Bool} />
        }
        else {
            return "Loading..."
        }
    }
}

export default connect()(Game3Container);