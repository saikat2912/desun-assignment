import React from 'react';
import { FaBell } from 'react-icons/fa';  // Import a bell icon from react-icons
import './style.css';  // Assuming you will add some CSS for the header

const Header = () => {
  return (
    <header className="header">
      
      <div className="header-right">
        <FaBell className="icon bell-icon" />
        <div className="profile">
          <img src="path-to-profile-image.jpg" alt="Profile" className="profile-pic" />
        </div>
      </div>
    </header>
  );
}

export default Header;