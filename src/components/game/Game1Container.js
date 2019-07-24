import * as React from "react"
import { connect } from "react-redux"
import { getRandomDogs } from "../../actions/displaylist"
import Game1 from './Game1'
import { getDogImage } from '../../actions/displayImages'
import { renderQuestion } from "../../actions/displaylist"

class Game1Container extends React.Component {
  componentDidMount() {
    this.props.getRandomDogs()
  }

  render() {
    const { dogs, correctAnswer } = this.props.questions
    const { renderQuestion } = this.props
    console.log("render element", renderQuestion)
    console.log("GAME1 CONTAINER", this.props)
    if (!correctAnswer) return "Loading..."
    this.props.getDogImage(correctAnswer)

    // if (renderQuestion) {
    //   console.log('something')
    //   this.props.getRandomDogs()
    //   renderQuestion(false)
    // }

    if (!this.props) return "Loading..."
    return <Game1 dogs={dogs} correctAnswer={correctAnswer} />
  }
}

const mapStateToProps = state => {
  return { questions: state.questions }
}

export default connect(
  mapStateToProps,
  { getRandomDogs, getDogImage, renderQuestion }
)(Game1Container)
