import React, { Component } from 'react';

class Button extends Component {

  render() {
    return (
      <button>{this.props.color}</button>
    )
  }
}

export default Button;
