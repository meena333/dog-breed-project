import * as React from "react"
import { connect } from "react-redux"
import { getRandomDogs } from "../../actions/displaylist"
import Game1 from './Game1'
import { getDogImage } from '../../actions/displayImages'

class Game1Container extends React.Component {
  componentDidMount() {
    this.props.getRandomDogs()
  }

  render() {
    const { dogs, correctAnswer } = this.props.questions
    if (!correctAnswer) return "Loading..."
    this.props.getDogImage(correctAnswer)

    if (!this.props) return "Loading..."
    return <Game1 dogs={dogs} correctAnswer={correctAnswer} />
  }
}

const mapStateToProps = state => {
  return { questions: state.questions }
}

export default connect(
  mapStateToProps,
  { getRandomDogs, getDogImage }
)(Game1Container)
