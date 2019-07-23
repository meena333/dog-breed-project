import * as React from "react";
import { Link } from "react-router-dom";
import * as request from 'superagent'
// import {getRandomDogName} from '../../actions/displaylist'
// import { connect } from "react-redux";
// import {getImage} from '../../actions/displayImages'

export default class Game1 extends React.Component {

  // componentDidMount() {
  //   const breedName = this.props
  //   request(
  //     `https://dog.ceo/api/breed/${encodeURIComponent(
  //       breedName
  //     )}/image/random/1`
  //   ).then(response => response.body.message)
  // }

  render() {
    return (
      <div>
        <h1>Game 1</h1>
        <Link to="/">Go back to the index</Link>
        There are {this.props.dogs.length} dog breeds.
        <ul>
          {this.props.dogs.map(dog => {
            return <li key={dog}>{dog}</li>;
          })}
          <li />
        </ul>
        <div>
          {/* {image && <img src={image} alt="Dog"/>}
        {!image && "Loading..."} */}
        </div>
      </div>
    )
  }
}

// export default connect(
//   null,
//   { getImage, getRandomDogName }
// )(Game1);
