import React, { Component } from 'react';
import {Jumbotron, Button} from 'reactstrap';
import './header.css';
import {Link} from 'react-router-dom'
 
export default class Header extends Component {
  render() {
    return (
      <div>
      <Jumbotron className="bg">
        <h1 className="display-3 centerd">Welcome to Disney Parent!</h1>
        <p className="lead white">The app that lets YOU enjoy your vacation</p>
        <p>We watch your Kids While you ride.</p>
        <p className="lead white">
          <Link to='/request'><Button className="col">Add a Request</Button></Link>
        </p>
      </Jumbotron>
      </div>
    )
  }
}