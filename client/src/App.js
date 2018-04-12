import React, { Component } from 'react';
import Services from './Services';

export default class App extends Component {

  login() {
    const username = 'tomtom'
    const password = '123456'
    const request = {"auth": {"email": username, "password": password}}
    Services.login(request)
    .then(request => {
      localStorage.setItem("jwt", request.data.jwt)
      console.log('success log in', request)
    })
    .catch(err => {
      console.log('error in log in', err)
    })
  }

  render() {
    return (
      <div className="App">
        <h1 style={{marginTop: "20vh", marginBottom: "5vh"}}>
          Login
        </h1>
        <form>
          <label htmlFor="email">Username: </label>
          <br />
          <input
            name="email"
            id="username"
            type="text"
          />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            name="password"
            id="password"
            type="password"
          />
          </form>
          <br />
          <button
            onClick={this.login}
          >
              Login
          </button>
        <br />
      </div>
    );
  }
}
