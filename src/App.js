import React, { Component } from 'react';

import IntroArea from './components/IntroArea';
import ReposArea from './components/ReposArea';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IntroArea />
        <ReposArea />
        <Footer />
      </div>
    );
  }
}

export default App;
