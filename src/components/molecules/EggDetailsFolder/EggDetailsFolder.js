import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder'; // You can use any icon you prefer

const EggDetailsFolder = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        textAlign: 'center',
        height: 355, 
        borderRadius: 2,
      }}
    >
      <FolderIcon sx={{ fontSize: 60, color: 'grey.500' }} />
      <Typography variant="h6" sx={{ mt: 2, color: 'grey.700' }}>
        The egg is not added to any incubator yet
      </Typography>
    </Paper>
  );
};

export default EggDetailsFolder;