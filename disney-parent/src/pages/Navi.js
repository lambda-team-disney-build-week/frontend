import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, } from 'reactstrap';
  import Login from '../components/Login';

  import './navbar.css'

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className='small'>
          <NavbarBrand className="nav-item"href="/parents">Disney Parent</NavbarBrand>
              <Nav className="ml-auto" navbar>
              <NavItem  >
                <NavLink className="nav-item"href="/Posts">Home</NavLink>
              </NavItem >
              <NavItem >
                <NavLink className="nav-item"href="/Login">Log In</NavLink>
              </NavItem >
              <NavItem >
                <NavLink className="nav-item"href="/Login">Signup</NavLink>
              </NavItem >
              <NavItem >
                <NavLink className="nav-item"href="/">Log Out</NavLink>
              </NavItem >
              <NavItem >
                <NavLink className="nav-item"href="/request">Request</NavLink>
              </NavItem >                            
            </Nav>
        </Navbar>
      </div>
    );
  }
}
