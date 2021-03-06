import React from 'react';
import ajax from 'superagent';

const COMMITS = 'commits';
const FORKS = 'forks';
const PULLS = 'pulls';

class Detail extends React.Component {

  // React method
  constructor(props) {
    super(props);

    // bind methods for event handlers
    this.selectMode = this.selectMode.bind(this);

    this.state = {
      mode: COMMITS,
      commits: [],
      forks: [],
      pulls: []
    };

  }

  fetchFeed(type) {
    ajax.get(`https://api.github.com/repos/facebook/react/${type}`)
      .end((error, response) => {

        if (!error && response) {
          this.setState({ [type]: response.body });
        } else {
          console.log(`Error fetching ${type}`, error);
        }

      });
  }

  // React method
  componentWillMount() {
    this.fetchFeed(COMMITS);
    this.fetchFeed(FORKS);
    this.fetchFeed(PULLS);
  }

  selectMode(event) {
    this.setState({ mode: event.currentTarget.dataset.mode });
  }

  renderCommits() {
    return this.state.commits.map((commit, index) => {

        const author = commit.author ? commit.author.login : 'Anonymous';

        return (
          <p key={index}>
          <strong>{author}</strong>:&nbsp;
          <a href={commit.html_url}>{commit.commit.message}</a>.
        </p>);

      });

  }

  renderForks() {
    return this.state.forks.map((fork, index) => {
        const owner = fork.owner ? fork.owner.login : 'Anonymous';

        return (<p key={index}>
            <strong>{owner}</strong>:&nbsp;forked to&nbsp;
            <a href={fork.html_url}>{fork.html_url}</a> at {fork.created_at}.
        </p>);
    });
  }

  renderPulls() {
    return this.state.pulls.map((pull, index) => {
        const user = pull.user ? pull.user.login : 'Anonymous';

        return (<p key={index}>
            <strong>{user}</strong>:&nbsp;
            <a href={pull.html_url}>{pull.body}</a>.
        </p>);
    });
  }

  // React method
  render() {

    let content;

    if (this.state.mode === 'commits') {
      content = this.renderCommits();
    } else if (this.state.mode === 'forks') {
      content = this.renderForks();
    } else {
      content = this.renderPulls();
    }

    return (<div>

      {content}

      <hr/>

      <button data-mode={COMMITS} onClick={this.selectMode}>
        Show Commits
      </button>

      <br/>

      <button data-mode={FORKS} onClick={this.selectMode}>
        Show Forks
      </button>

      <br/>

      <button data-mode={PULLS} onClick={this.selectMode}>
        Show Pulls
      </button>

      </div>);
  }

}

export default Detail;
