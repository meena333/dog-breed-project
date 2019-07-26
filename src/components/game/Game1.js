import * as React from "react";
import { Link } from "react-router-dom";
import Scoreboard from "../Scoreboard";

export default function Game1(props) {
  const { 
      dogbreeds, dogImages,
      handleSubmit, handleOptionChange,
      numberOfAnswers, numberOfCorrectAnswers } = props;

    return (
      <div className="Game1-content">
        <h1>Guess who's here?</h1>
        <Link to="/">Go back to the index</Link>
        <br />
        <br />
        <Scoreboard
          total={numberOfAnswers}
          correct={numberOfCorrectAnswers}
        />
        <br />
        <br />
        <div className="Dog-images">
          {dogImages && <img src={dogImages} alt="Dog" />}
          {!dogImages && "Loading..."}
        </div>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="Answers">
            {dogbreeds && dogbreeds.map(dog => {
              return (
                <div key={dog}>
                  <input
                    type="radio"
                    id={dog}
                    name="dogbreed"
                    value={dog}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor={dog}>{dog}</label>
                </div>
              );
            })}
            <br />
            <button onClick={() => handleSubmit}>Submit Answer</button>
          </div>
        </form>
      </div>
    );
}
