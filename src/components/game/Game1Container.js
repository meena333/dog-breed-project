import * as React from "react"
import { connect } from "react-redux"
// import { getImage } from "../../actions/displayImages"
import {getRandomDogs, getRandomDogName} from "../../actions/displaylist"
import Game1 from './Game1'

class Game1Container extends React.Component {
  componentDidMount() {
    this.props.getRandomDogs()
  }

  render() {
    console.log("this.props", this.props)
    if (!this.props) return "Loading...";
    return <Game1 dogs={this.props.dogs} />
  }
}

const mapStateToProps = state => {
  console.log("state", state.questions) 
  return {dogs: state.questions.dogs}
}

export default connect(
  mapStateToProps,
  { getRandomDogs, getRandomDogName }
)(Game1Container);
