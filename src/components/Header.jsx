import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <div className="logo">SynQuora</div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  </header>
);
export default Header;
