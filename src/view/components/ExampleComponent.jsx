import React from 'react';

export default class ExampleComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      world: "World"
    };
  }
  onClick() {
    this.setState({
      world: "Luca"
    })
  }

  render() {
    return <h1 onClick={this.onClick.bind(this)}>Hello, {this.state.world}!</h1>;
  }
}
