import React, { Component } from 'react';
import axios from 'axios';

import Project from './Project';
import { Loader, Error } from './common';

class ReposArea extends Component {
  state = {
    repos: '',
    error: ''
  }

  componentDidMount() {
    this.getData();
  }

  getData = async() => {
    try {
      const { data: repos1 } = await axios(`https://api.github.com/users/zonayedpca/repos?page=1&sort=created&type=owner`);
      const { data: repos2 } = await axios(`https://api.github.com/users/zonayedpca/repos?page=2&sort=created&type=owner`);
      let repos = [...repos1, ...repos2];
      this.setState({ repos });
    } catch(err) {
      this.setState({ error: 'Somthing went wrong!' })
    }
  }

  renderRepos = () => {
    const { repos, error } = this.state;
    if(repos) {
      return (
        repos.map(repo => (
          <Project key={repo.id} repo={repo} />
        ))
      )
    } else if(error) {
      return (
        <Error>
          <p>{error}</p>
        </Error>
      )
    }
    return (
      <Loader />
    )
  }

  render() {
    return (
      <div className="repos-area">
        <div className="container">
          <div className="repos">
            {this.renderRepos()}
          </div>
        </div>
      </div>
    )
  }
}

export default ReposArea;
