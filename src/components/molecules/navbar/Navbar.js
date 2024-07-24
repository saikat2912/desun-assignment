import React, { useState } from 'react';
import './style.css';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`navbar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="navbar-brand">
        <img src="path/to/logo.png" alt="Logo" className="logo" />
        {!isCollapsed && <span>Materialize</span>}
      </div>
      <button className="toggle-button" onClick={toggleNavbar}>
        {isCollapsed ? '☰' : '✕'}
      </button>
      <ul className="nav-links">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Nursery</a></li>
        <li><a href="#">Incubator Rooms</a></li>
        <li><a href="#">Incubators</a></li>
        <li><a href="#">Brooders</a></li>
        <li><a href="#">Eggs</a></li>
        <li className="divider"></li>
        <li><a href="#">Ingredient</a></li>
        <li><a href="#">Recipe</a></li>
        <li><a href="#">Diet</a></li>
        <li><a href="#">Feed Type</a></li>
      </ul>
    </div>
  );
};

export default Navbar;