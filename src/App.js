import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserForm from './components/UserForm'

class App extends Component {
  state = {
    repos: null
  }
  getUser = (e) => {
      e.preventDefault();
      const user = e.target.elements.username.value;
      
      axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        const repos = res.data.public_repos;
        console.log(repos);
        this.setState({repos:repos});
      })
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title"> HTTP call in React </h1>
        </header>
        <UserForm getUser={this.getUser} />
        {this.state.repos ? <p>{this.state.repos}</p> : <p>Please Enter A Username</p>}
        
      </div>
    );
  }
}

export default App;
