import React from 'react';
import { FaBell } from 'react-icons/fa';  
import './style.css';  
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Header = () => {
  return (
    <header className="header">
      
      <div className="header-right">
        <NotificationsNoneIcon className="icon bell-icon" />
        <div className="profile">
          <img src="profile.png" alt="Profile" className="profile-pic" />
        </div>
      </div>
    </header>
  );
}

export default Header;