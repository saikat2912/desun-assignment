import React from 'react';
import EggDetailHead from '../../atoms/EggDetailHead/EggDetailHead';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const EggListDetails = () => {
  return (
    <div style={{backgroundColor:'#EFF5F2'}}>
        <Typography variant="body2" >
        Egg Module
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mx: 1 }}>
        /
      </Typography>
      <Link to="#" underline="hover" color="textSecondary" variant="body2">
        Egg List
      </Link>
      <Typography variant="body2" color="textSecondary" sx={{ mx: 1 }}>
        /
      </Typography>
      <Typography variant="body2" color="textPrimary">
        Egg Details
      </Typography>
      <EggDetailHead />
    </div>
  );
};

export default EggListDetails;