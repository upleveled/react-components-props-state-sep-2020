import React, { Component } from 'react';

export default class ClassCounter extends Component {
  state = {
    count: 0,
    count2: 0,
  };

  handleMinusClick = () => {
    this.setState(({ count }) => ({
      count: count - 1,
    }));
  };

  handlePlusClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  handleMinusClick2 = () => {
    this.setState(({ count2 }) => ({
      count2: count2 - 1,
    }));
  };

  handlePlusClick2 = () => {
    this.setState(({ count2 }) => ({
      count2: count2 + 1,
    }));
  };

  render() {
    return (
      <>
        <div>
          {this.props.title} {this.state.count}
        </div>
        <button onClick={this.handleMinusClick}>-</button>
        <button onClick={this.handlePlusClick}>+</button>
        <br />
        <br />

        <div>
          {this.props.title} {this.state.count2}
        </div>
        <button onClick={this.handleMinusClick2}>-</button>
        <button onClick={this.handlePlusClick2}>+</button>
      </>
    );
  }
}
