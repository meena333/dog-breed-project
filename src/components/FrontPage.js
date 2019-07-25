import * as React from "react";
import { Link } from "react-router-dom";

export default function FrontPage() {
  return (
    <div>
    <h1>Which dog breed are you?</h1>
    <button className="List-button"><Link to= {`/list`}>Explore dog breeds</Link></button>
    <br />
    <br />
    <button className="Game-button"><Link to= {`/game`}>Test your knowledge about dog breeds</Link></button>
    </div>
  )
}