import React, { Component } from 'react';
import Button from './button.js';

class Switchboard extends Component {

  renderButton(i, color) {
    return (
      <Button
        key={i}
        id={i}
        color={color}
        onClick={() => {this.props.onClick(i)}}
      />
    )
  }

  buttonLoop() {
    let result = []
    this.props.colors.forEach((color, index) => {
      let button = this.renderButton(index, color);
      result.push(button);
    });
    return result;
  }

  render() {
    return (
      <div>
        {this.buttonLoop()}
      </div>
    )
  }
}

export default Switchboard;
