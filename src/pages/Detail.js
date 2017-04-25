import React from 'react';
import Chance from 'chance';

class Detail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: chance.first(),
      country: chance.country({full: true})
    };
  }

  buttonClicked() {

    const newState = {
      name: chance.first()
    };

    // kind of like Object.assign
    this.setState(newState);

  }

  render() {
      return (<div>
        <p>Hello {this.state.name}!</p>
        <p>You are from {this.state.country} right?</p>
        <button onClick={this.buttonClicked.bind(this)}>Click Me</button>
        </div>);
  }
}

export default Detail;
