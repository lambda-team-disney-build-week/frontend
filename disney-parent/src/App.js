import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import { Route, BrowserRouter } from 'react-router-dom';
import Request from './pages/Request';
import Home from './pages/Home';
import Posts from './pages/Posts';

import Parent from './components/Parent';


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
        <Route exact path ='/' exact component={Home}></Route>
        <Route path ='/login' component ={Login}></Route>
        <Route path ='/posts' component={Posts}></Route>
        <Route path ='/parent' component={Parent}></Route>
        <Route path ='/request' component={Request}></Route>
      </BrowserRouter >
    );
  }
}



export default App;