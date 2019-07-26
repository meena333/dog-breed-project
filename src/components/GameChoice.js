import * as React from "react";
import { Link } from "react-router-dom";

export default function GameChoice() {
  return (
    <div>
    <h1>Choose the game you want to play</h1>
    <button className="Game-button"><Link to= {`/game/game1`}>Guess who's here?</Link></button>
    <br />
    <br />
    <button className="Game-button"><Link to= {`/game/game2`}>What do I look like?</Link></button>
    <br />
    <br />
    <button className="Game-button"><Link to= {`/game/game3`}>Which dog breed are you?</Link></button>
    </div>
  )
}