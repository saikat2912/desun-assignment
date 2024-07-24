import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

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
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/nursery">Nursery</Link></li>
        <li><Link to="/incubatorroom">Incubator Rooms</Link></li>
        <li><Link to="/incubators">Incubators</Link></li>
        <li><Link to="/brooders">Brooders</Link></li>
        <li><Link to="/eggs">Eggs</Link></li>
        <li className="divider"></li>
        <li><Link to="/ingredient">Ingredient</Link></li>
        <li><Link to="/recipe">Recipe</Link></li>
        <li><Link to="/diet">Diet</Link></li>
        <li><Link to="/feedtype">Feed Type</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;