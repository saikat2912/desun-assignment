import React from 'react';
import { Box, Typography, Paper, Divider, IconButton, Grid ,Avatar} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const EggDetailsHistory = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        borderRadius: 2,
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">Egg History - EDIT</Typography>
        <IconButton color="primary">
          <EditIcon />
        </IconButton>
      </Box>

      <Grid container spacing={2} mb={2}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
            <Typography variant="body2">Site : Yelahanka</Typography>
           

            <Typography variant="body2">Section : SEC0012</Typography>
           

            <Typography variant="body2">Enclosure : 24D</Typography>
           

            <Typography variant="body2">Cage : C112</Typography>
           
            <Typography variant="body2">Nest Box : N123</Typography>
           

            <Typography variant="body2">Shape : Normal</Typography>
            
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
            <Typography variant="body2">Mother id :   <a href="#" style={{ color: 'blue' }}>0000123456</a></Typography>
          

            <Typography variant="body2">Father id : <a href="#" style={{ color: 'blue' }}>Probable (5)</a></Typography>
            

            <Typography variant="body2">Collected on : 1 Apr 2024</Typography>
           

            <Typography variant="body2">Lay Date : 1 Apr 2024</Typography>
            

            <Typography variant="body2">Clutch No : NA</Typography>
           

            <Typography variant="body2">Collected By : Jordan Steveson</Typography>
            
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ mb: 2 }} />

      <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
        <Typography variant="subtitle1" gutterBottom>Initial Measurement</Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box textAlign="center">
            <Avatar src="/card_details/length.png" alt="Condition Icon" sx={{ marginRight: 2 }} />
              <Typography variant="body2">Not Added</Typography>
              <Typography variant="body2" color="textSecondary">Length</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box textAlign="center">
            <Avatar src="/card_details/width.png" alt="Condition Icon" sx={{ marginRight: 2 }} />
              <Typography variant="body2">Not Added</Typography>
              <Typography variant="body2" color="textSecondary">Width</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box textAlign="center">
            <Avatar src="/card_details/weight.png" alt="Condition Icon" sx={{ marginRight: 2 }} />
              <Typography variant="body2">Not Added</Typography>
              <Typography variant="body2" color="textSecondary">Weight</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default EggDetailsHistory;