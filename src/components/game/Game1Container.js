import * as React from "react";
import { connect } from "react-redux";
import { getImage } from "../../actions/displayImages";
import {getDogs ,getRandomDogName, makeArrayOfRandomDogs, getRandomDogs} from "../../actions/displaylist";
import Game1Image from './Game1Image'

class Game1Container extends React.Component {
  componentDidMount() {
    const randomName = this.props.getRandomDogs()
    console.log('randomNames',randomName)
  }

  render() {
    if (!this.props) return "Loading...";
    return <Game1Image dogs={this.props.dogs}/>;
  }
}

const mapStateToProps = state => {
  console.log('state game1',state.dogbreeds)
   return {dogs: state.dogbreeds}
  
};

export default connect(
  mapStateToProps,
  { getImage, getRandomDogName, makeArrayOfRandomDogs, getDogs, getRandomDogs }
)(Game1Container);
