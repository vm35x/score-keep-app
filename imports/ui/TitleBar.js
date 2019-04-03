import React from "react";
import PropTypes from "prop-types";

export default class TitleBar extends React.Component {
  renderSubTitle() {
    if (this.props.subtitle) {
      return <h2 className="title-bar__subtitle">{this.props.subtitle}</h2>;
    }
  }

  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.renderSubTitle()}
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired
};

TitleBar.defaultProps = {
  title: "Default title"
};
