import * as React from "react";

export default class Scoreboard extends React.Component {
  render() {
    let percent = (this.props.correct / this.props.total) * 100;
    console.log("percent", percent);
    if (!percent) {
      percent = 0;
    }
    percent = percent.toFixed(2);

    return (
      <div className="Scoreboard">
        <h3>
          Your progress: {this.props.correct}/{this.props.total}
        </h3>
        <h3>Your score: {percent}%</h3>
      </div>
    );
  }
}
