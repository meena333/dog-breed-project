// import * as React from "react";
// import { Link } from "react-router-dom";
// import {getRandomDogName} from '../../actions/displaylist'
// import { connect } from "react-redux";
// import {getImage} from '../../actions/displayImages'
// import Game1 from './Game1'

// function Game1Image(props) {
//   const dogs = props.dogs
//   console.log('props.dogs',props.dogs)
//   console.log(getRandomDogName(dogs))
//   const correctAnswer = getRandomDogName(dogs)
//   const image = getImage(correctAnswer)
//   //console.log('image',image)

//   return(<div>
//     <Game1 img = {image}/>
//     There are {dogs.length} dog breeds.
//         <ul>
//         {dogs.map(dog => {
//           return <li key={dog}>{dog}</li>;
//         })}
//         <li />
//       </ul></div>
//   )
 
// }
// const mapStateToProps = state => {
//   console.log('state game1',state.dogImages)
//    return {dogs: state.dogImages}
// }

// export default connect(
//   mapStateToProps,
//   { getImage, getRandomDogName }
// )(Game1Image);

// componentDidMount(){
//   request.get()
//     .then() // setState 
// }