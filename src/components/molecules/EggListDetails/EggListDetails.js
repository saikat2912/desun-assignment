import React from 'react';
import EggDetailHead from '../../atoms/EggDetailHead/EggDetailHead';
import { Typography,Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import EggDetailsFolder from '../EggDetailsFolder/EggDetailsFolder';
import EggDetailsHistory from '../EggDetailsHistory/EggDetailsHistory';

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
      <Grid container spacing={5}>
        <Grid item xs={12} md={12} sm={12}>
        <EggDetailHead />
        </Grid>
        <Grid item xs={2} md={2} sm={2}>
        
        </Grid>
        <Grid item xs={4} md={4} sm={4}>
        <EggDetailsFolder/>
        </Grid>
        <Grid item xs={6} md={6} sm={6}>
        <EggDetailsHistory/>
        </Grid>
      </Grid>
      
     
    </div>
  );
};

export default EggListDetails;