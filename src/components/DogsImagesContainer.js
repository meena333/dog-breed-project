import * as React from "react";
import DogsImages from "./DogsImages";
import { connect } from "react-redux";
import { getDogImages } from "../actions/displayImages";

class DogsImagesContainer extends React.Component {
  componentDidMount() {
    this.props.getDogImages(this.props.match.params.breed);
  }

  render() {
    if (!this.props) return "Loading...";
    return <DogsImages images={this.props} name={this.props.match.params.breed}/>;
  }
}

const mapStateToProps = state => ({
  dogImages: state.dogImages
});

export default connect(
  mapStateToProps,
  { getDogImages }
)(DogsImagesContainer);
