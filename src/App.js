import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title"> HTTP call in React </h1>
        </header>
        <UserForm />
        
      </div>
    );
  }
}

export default App;
