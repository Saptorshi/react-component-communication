import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './parentToChild/parent'

class App extends Component {
  state = {
    title : 'Placeholder Title'
  }

  doWhatever = (param) => {
    this.setState({
      title : param
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Component Communication</h1>
        </header>
        <br />
        <Parent doWhatever={this.doWhatever.bind(this, 'Study Hard')} playWhatever={this.doWhatever.bind(this, 'Play Hard')} title={this.state.title} />
      </div>
    );
  }
}

export default App;
