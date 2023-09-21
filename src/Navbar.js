import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
