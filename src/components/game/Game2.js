import * as React from "react";
import { Link } from "react-router-dom";
import Scoreboard from "../Scoreboard";

export default function Game2(props) {
    const { 
        dogName, images, 
        handleSubmit, handleOptionChange, 
        numberOfAnswers, numberOfCorrectAnswers } = props;

    return (
        <div className="Game2-content">
            <h1>What do I look like?</h1>
            <Link to="/">Go back to the index</Link>
            <br />
            <br />
            <Scoreboard
                total={numberOfAnswers}
                correct={numberOfCorrectAnswers}
            />
            <br />
            <div className="Dog-name">
                <h2>
                    {!dogName && "Loading..."}
                    {dogName}
                </h2>
            </div>
            <br />
            <form onSubmit={handleSubmit}>
                <div className="Dog-images">
                    {!images && "Loading..."}
                    {images && images.map(image =>
                        <div className="Images-game2" key={image}>
                            <input type="radio" id={image} name="dogbreed" value={image} onChange={handleOptionChange}></input>
                            <img src={image} alt="Dog" />
                        </div>
                    )}
                    <br />
                    <button onClick={() => handleSubmit}>Submit Answer</button>
                </div>
            </form>
        </div>
    );
}
