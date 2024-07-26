import React from 'react';
import { FaBell } from 'react-icons/fa';  
import './style.css';  


import { AppBar, Toolbar, IconButton, Avatar, Box, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export const Navigation = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#EFF5F2', boxShadow: 'none' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
         
        </Box>
          <NotificationsNoneIcon className="icon bell-icon" color='action' sx={{height:50,width:30}} />

     
        <IconButton color="inherit">
          
        </IconButton>
        <IconButton color="inherit">
        <div className="profile">
          <img src="profile.png" alt="Profile" className="profile-pic" />
        </div>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

const Header = () => {
  return (
    <header className="header">
      
      <div className="header-right">
       
        <div className="profile">
          <img src="profile.png" alt="Profile" className="profile-pic" />
        </div>
      </div>
    </header>
  );
}

export default Header;