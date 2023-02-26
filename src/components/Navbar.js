import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Photos">Photos</Link>
        <Link to="/Contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
