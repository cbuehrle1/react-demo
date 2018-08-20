import React, { Component } from 'react';

class Button extends Component {

  render() {
    return (
      <button
        className={this.props.color}
        onClick={this.props.onClick}>
      </button>
    )
  }
}

export default Button;
