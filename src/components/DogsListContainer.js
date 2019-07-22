import * as React from "react";
import DogsList from "./DogsList";
import { getDogs, showList } from "../actions/displaylist";
import { connect } from "react-redux";

class DogsListContainer extends React.Component {
  componentDidMount() {
    this.props.getDogs();
  }

  render() {
    if (!this.props.dogs) return "Loading...";
    return <DogsList dogs={this.props.dogs} />;
  }
}

const mapStateToProps = state => {
  return {
    dogs: state.dogbreeds
  };
};

export default connect(
  mapStateToProps,
  { getDogs, showList }
)(DogsListContainer);
