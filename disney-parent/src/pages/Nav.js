import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Signup">Signup</Link>
        <h1>Disney Parent</h1>
      </nav>
    </div>
  )
}
export default Nav;
