import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
        <Link onClick={""} to="/">Home</Link>
        <Link onClick={""} to="/About">Tournaments</Link>
        <Link onClick={""} to="/Contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
