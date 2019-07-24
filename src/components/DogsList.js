import * as React from "react"
import {Link} from 'react-router-dom'

export default function DogsList(props) {
  const dogs = props.dogs
  return (
    <div className="Dogs-List">
      <h1>List of all dog breeds</h1>
      <p>There are {dogs.length} dog breeds.</p>
      <ul>
        {dogs.map(dog => {
          return <li key={dog}><Link to={`./breeds/${dog}`}>{dog}</Link></li>
        })}
        <li />
      </ul>
    </div>
  )
}
