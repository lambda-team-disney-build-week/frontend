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
        <Navbar className='small' color="light" light expand="md">
          <NavbarBrand className="nav-item"href="#">Disney Parent</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
              <Nav className="ml-auto" navbar>
              <NavItem  >
                <NavLink className="nav-item"href="/Posts">Home</NavLink>
              </NavItem >
              <NavItem >
                <NavLink className="nav-item"href="/Login">Log In</NavLink>
              </NavItem >
              <NavItem >
                <NavLink className="nav-item"href="/Signup">Signup</NavLink>
              </NavItem >
              <NavItem >
                <NavLink className="nav-item"href="/">Log Out</NavLink>
              </NavItem >              
            </Nav>
        </Navbar>
      </div>
    );
  }
}
