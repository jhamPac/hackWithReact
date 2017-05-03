import React from 'react';

class Detail extends React.Component {

  constructor(props) {
    super(props);

    this.state = { commits: [] };
  }

  render() {
      return (<div>

        {this.state.commits.map((commit, index) => (
          <p key={index}>Some commit data here.</p>
        ))}

        </div>);
  }
}

export default Detail;
