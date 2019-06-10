import React, { Component } from 'react';
import {Jumbotron, Button} from 'reactstrap';
import './header.css';
import {Link} from 'react-router-dom'
 
export default class Header extends Component {
  render() {
    return (
      <div>
      <Jumbotron className="light-blue">
        <h1 className="display-3 white">Welcome to Disney Parent!</h1>
        <p className="lead white">The app that lets YOU enjoy your vacation</p>
        <p>We watch your Kids While you ride.</p>
        <p className="lead white">
          <Link to='/request'><Button className="red" color="primary">Add a Request</Button></Link>
        </p>
      </Jumbotron>
      </div>
    )
  }
}