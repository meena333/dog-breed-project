import * as React from "react";
import { Link } from "react-router-dom";
import "./dogsimages.css";

export default function DogsImages(props) {
  const arrayOfImages = props.images.dogImages;
  return (
    <div>
      <h1>Images of {props.name} breed</h1>
      <Link to="/">Go back to the index</Link>
      <br />
      <br />
      <div className="Dog-images">
        {arrayOfImages &&
          arrayOfImages.map((url, i) => <img src={url} alt="Dog" key={i} />)}
        {!arrayOfImages && "Loading..."}
      </div>
    </div>
  );
}
