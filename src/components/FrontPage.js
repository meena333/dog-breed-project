import * as React from "react";
import { Link } from "react-router-dom";

export default function FrontPage() {
  
  return (
    <div>
    <h1>Which dog breed are you?</h1>
    <button className="listButton"><Link to= {`/list`}>Explore dog breeds</Link></button>
    <br/><br/>
    <button className="game1Button"><Link to= {`/game1`}>Test your knowledge about dog breeds</Link></button>
    </div>

  )

}