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
    console.log('Yup that is a click');
  }

  render() {
      return (<div>
        <p>Hello {this.state.name}!</p>
        <p>You are from {this.state.country} right?</p>
        <button onClick={this.buttonClicked.call(this)}>Click Me</button>
        </div>);
  }
}

export default Detail;
