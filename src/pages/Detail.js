import React from 'react';
import Chance from 'chance';

class Detail extends React.Component {

  buttonClicked() {
    console.log('Yup that is a click');
  }

  render() {
      return (<div>
        <p>Hello {chance.first()}!</p>
        <p>You are from {chance.country({full: true})} right?</p>
        <button onClick={this.buttonClicked}>Click Me</button>
        </div>);
  }
}

export default Detail;
