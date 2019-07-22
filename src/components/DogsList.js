import * as React from "react";

export default function DogsList(props) {
  const dogs = props.dogs;
  return (
    <div>
      <h1>List of all dog breeds</h1>
      There are {dogs.length} dog breeds.
      <ul>
        {dogs.map(dog => {
          return <li key={dog}>{dog}</li>;
        })}
        <li />
      </ul>
    </div>
  );
}
