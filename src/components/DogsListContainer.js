import * as React from "react";
import * as request from "superagent";
import DogsList from "./DogsList";

export default class DogsListContainer extends React.Component {
  state = {};

  componentDidMount() {
    request("https://dog.ceo/api/breeds/list/all").then(response =>
      this.setState({ dogs: Object.keys(response.body.message) })
    );
  }

  render() {
    if (!this.state.dogs) return "Loading...";
    return <DogsList dogs={this.state.dogs} />;
  }
}
