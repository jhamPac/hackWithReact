import React from 'react';
import Chance from 'chance';

class Detail extends React.Component {

  constructor(props) {
    super(props);

    const people = [];

    for (let i = 0; i < 10; i += 1) {
      people.push({
        name: chance.first(),
        counrtry: chance.country({full: true})
      });
    }

    this.state = { people };
  }

  buttonClicked() {

    // kind of like Object.assign
    this.setState({name: chance.first()});

  }

  render() {
      return (<div>
        {this.state.people.map((person, index) => (
        <p key={index}>Hello, {person.name} from {person.country}!</p>
        ))}
        </div>);
  }
}

export default Detail;
