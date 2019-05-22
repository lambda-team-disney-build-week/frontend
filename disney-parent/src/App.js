import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import { Route, BrowserRouter } from 'react-router-dom';
// import Auth from './components/Auth';
import Home from './pages/Home';
import Posts from './pages/Posts';
// import axios from 'axios';


class App extends Component {
  state={
    loggedIn: false,
    loginForm: true
  }

  login = () => {
    this.setState({
      loggedIn: true
    })
  }

  logout = () => {
    this.setState({
      loggedIn:false
    })
  }
  render() {
    return (
      <BrowserRouter >
        <Route path ='/' exact component={Home}></Route>
        <Route path ='/login' component ={Login}></Route>
        <Route path ='/posts' component={Posts}></Route>
      </BrowserRouter >
    );
  }
}

export default App;