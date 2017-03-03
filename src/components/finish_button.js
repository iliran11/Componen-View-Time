import React, { Component } from 'react';
import {Link} from 'react-router';

class FinishButton extends React.Component {
  render () {
    return (
      <Link to={this.props.redirectButtonUrl} className="btn btn-primary">
          Go To {this.props.redirectButtonUrl}
      </Link>
    );
  }
}

export default FinishButton;
