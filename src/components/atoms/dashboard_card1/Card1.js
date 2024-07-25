import React from 'react';
import './style.css';
import { Grid, Paper, Typography } from '@mui/material';

const Card1 = ({ number, title, logo, fontcolor, logoBackground }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={2.4}>
      <Paper style={{ padding: '16px', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
        <div style={{ backgroundColor: logoBackground, borderRadius: '50%', padding: '8px', marginRight: '16px' }}>
          <div style={{ fontSize: '2rem' }}>{logo}</div>
        </div>
        <div style={{ textAlign: 'left' }}>
          <Typography variant="h6" component="p" style={{ color: fontcolor }}>
            {number}
          </Typography>
          <Typography variant="subtitle1">{title}</Typography>
        </div>
      </Paper>
      -
    </Grid>
  );
};

export default Card1;