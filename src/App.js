import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {
  state = {
    username: 'Dimitar'
  }

  changeName = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            React-Assignment 1
          </h1>
        </header>
        <UserInput changeName={this.changeName} name={this.state.username}/>
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
