import React from 'react';
import EggDetailHead from '../../atoms/EggDetailHead/EggDetailHead';
import { Typography,Grid,Box } from '@mui/material';
import { Link } from 'react-router-dom';
import EggDetailsFolder from '../EggDetailsFolder/EggDetailsFolder';
import EggDetailsHistory from '../EggDetailsHistory/EggDetailsHistory';

const EggListDetails = () => {
  return (
    <div style={{backgroundColor:'#EFF5F2'}}>
         <Box p={2} >
        <Typography variant="subtitle1" gutterBottom style={{marginLeft:250}}>
         <span style={{color:'#BAC3BE'}}>Egg Module / Egg List </span>  / Egg Details
        </Typography>
       
      <Grid container>
        <Typography style={{fontSize:20,color:'black'}}>hello</Typography>
      </Grid>
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
      </Box>
     
    </div>
  );
};

export default EggListDetails;