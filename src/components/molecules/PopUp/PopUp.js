import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    margin: 0,
  },
}));

const PopUp = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Popup
      </Button>
      <StyledDialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Send for Incubation</DialogTitle>
        <DialogContent style={{ padding: '16px' }}>
          <form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Current State" variant="outlined" select>
                  <MenuItem value="Intact">Intact</MenuItem>
                  <MenuItem value="Cracked">Cracked</MenuItem>
                  <MenuItem value="Broken">Broken</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Condition" variant="outlined" select>
                  <MenuItem value="Warm">Warm</MenuItem>
                  <MenuItem value="Cold">Cold</MenuItem>
                  <MenuItem value="Rotten">Rotten</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Select Nursery</InputLabel>
                  <Select label="Select Nursery">
                    <MenuItem value="Nursery 1">Nursery 1</MenuItem>
                    <MenuItem value="Nursery 2">Nursery 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Select Room</InputLabel>
                  <Select label="Select Room">
                    <MenuItem value="Room 1">Room 1</MenuItem>
                    <MenuItem value="Room 2">Room 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Select Incubator</InputLabel>
                  <Select label="Select Incubator">
                    <MenuItem value="Incubator 1">Incubator 1</MenuItem>
                    <MenuItem value="Incubator 2">Incubator 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </StyledDialog>
    </div>
  );
};

export default PopUp;