import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import EggIcon from '@mui/icons-material/Egg';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Box, IconButton } from '@mui/material';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`navbar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="navbar-brand">
      
    
      <IconButton color="inherit" className="toggle-button" onClick={toggleNavbar}>
       
        {isCollapsed ? '☰' :<><img src="logo.png" alt="Logo" className="logo" />  <KeyboardDoubleArrowLeftIcon /></>}
      </IconButton>
   
       
       
      </div>
     
      <ul className="nav-links">

        <li><Link to="/dashboard"><EggIcon/><span className='list-item'>Dashboard</span></Link></li>
        <li><Link to="/nursery"><EggIcon/><span className='list-item'>Nursery</span></Link></li>
        <li><Link to="/incubatorroom"><EggIcon/><span className='list-item'>Incubator Rooms</span></Link></li>
        <li><Link to="/incubators"><EggIcon/><span className='list-item'>Incubators</span></Link></li>
        <li><Link to="/brooders"><EggIcon/><span className='list-item'>Brooders</span></Link></li>
        <li><Link to="/eggs"><EggIcon/><span className='list-item'>Eggs</span></Link></li>
      </ul>

      <ul className="nav-links">
        <li className="divider"></li>
        <li><Link to="/ingredient"><EggIcon /><span className='list-item'>Ingredient</span></Link></li>
        <li><Link to="/recipe"><EggIcon/><span className='list-item'>Recipe</span></Link></li>
        <li><Link to="/diet"><EggIcon/><span className='list-item'>Diet</span></Link></li>
        <li><Link to="/feedtype"><EggIcon/><span className='list-item'>Feed Type</span></Link></li>
      </ul>
    </div>
  );
};

export default Navbar;