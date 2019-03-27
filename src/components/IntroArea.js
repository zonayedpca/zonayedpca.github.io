import React, { Component } from 'react';
import axios from 'axios';

import { Loader, Error } from './common';

class IntroArea extends Component {
  state = {
    profile: '',
    error: ''
  }

  componentDidMount() {
    this.getData();
  }

  getData = async() => {
    try {
      const { data: profile } = await axios(`https://api.github.com/users/zonayedpca`);
      this.setState({ profile });
    } catch(err) {
      this.setState({ error: err });
    }
  }

  renderUser = () => {
    const { profile, error } = this.state;
    if(profile) {
      return (
        <React.Fragment>
          <div className="img">
            <img alt="profile" src={profile.avatar_url} />
          </div>
          <h1>{profile.name}</h1>
          <p className="username">{profile.login}</p>
          <p className="bio">{profile.bio}</p>
          <p className="list"><strong>{profile.public_repos}</strong> Repository</p>
        </React.Fragment>
      )
    } else if(error) {
      return (
        <Error>
          <p>{error.response.statusText}</p>
        </Error>
      )
    }
    return (
      <div>
        <Loader />
      </div>
    )
  }

  render() {
    return (
      <div className="intro-area">
        <div className="container">
          <div className="intro">
            {this.renderUser()}
          </div>
        </div>
      </div>
    )
  }
}

export default IntroArea;
