import * as React from "react";
import DogsImages from "./DogsImages";
import { connect } from "react-redux";
import { getDogImages } from "../actions/displayImages";

class DogsImagesContainer extends React.Component {
  componentDidMount() {
    const breedName = "hound";
    console.log("props", this.props);
    console.log(`Now fetch photos for breed = ${breedName}`);

    this.props.getDogImages();
    console.log("compnentdidmount", this.props.dogImages);
  }

  render() {
    if (!this.props) return "Loading...";
    return <DogsImages images={this.props} />;
  }
}

const mapStateToProps = state => ({
  dogImages: state.dogImages
});

export default connect(
  mapStateToProps,
  { getDogImages }
)(DogsImagesContainer);
