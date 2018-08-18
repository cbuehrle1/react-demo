import React, { Component } from 'react';
import Button from './button.js';

class Switchboard extends Component {

  renderButton(i, color) {
    return <Button key={i} color={color}/>
  }

  buttonLoop() {
    let result =[]
    console.log(this.props);
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
