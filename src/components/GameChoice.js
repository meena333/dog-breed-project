import * as React from "react";
import { Link } from "react-router-dom";
import { checkGameChoice } from "../actions/checkGameChoice"
import { connect } from "react-redux";

function GameChoice(props) {
  const { checkGameChoice } = props

  return (
    <div>
    <h1>Choose the game you want to play</h1>
    <button className="Game-button" onClick={() => checkGameChoice(1)}><Link to= {`/game/game1`}>Guess who's here?</Link></button>
    <br />
    <br />
    <button className="Game-button" onClick={() => checkGameChoice(2)}><Link to= {`/game/game2`}>What do I look like?</Link></button>
    <br />
    <br />
    <button className="Game-button" onClick={() => checkGameChoice(3)}><Link to= {`/game/game3`}>Which dog breed are you?</Link></button>
    </div>
  )
}

export default connect (null, { checkGameChoice })(GameChoice)