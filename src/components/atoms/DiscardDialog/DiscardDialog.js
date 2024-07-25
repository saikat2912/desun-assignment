import React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Alert,
  IconButton
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';


const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(2),
        margin: 0,
    },
}));

const DiscardForm = ({ open, onClose }) => {
  const [selectedState, setSelectedState] = React.useState('');
  const [comments, setComments] = React.useState('');
  const [necropsyNeeded, setNecropsyNeeded] = React.useState('');

  const handleSubmit = () => {

    console.log({ selectedState, comments, necropsyNeeded });
    onClose();
  };

  return (
    <StyledDialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle> <IconButton sx={{ marginTop: 0.25 }}><AssignmentIcon /></IconButton>Select State for Discard<IconButton sx={{ float: 'right' }} onClick={onClose}><CloseIcon /></IconButton></DialogTitle>
      <DialogContent>
      <Box style={{ border: '1px solid #C3CEC7', }} sx={{ p: 1.5, borderRadius: 2 }}>
        <FormControl component="fieldset">
          <RadioGroup
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <FormControlLabel
              value="Major Cracked"
              control={<Radio />}
              label="Major Cracked"
            />
            <FormControlLabel
              value="Significantly Underdeveloped"
              control={<Radio />}
              label="Significantly Underdeveloped"
            />
            <FormControlLabel
              value="Rotten"
              control={<Radio />}
              label="Rotten"
            />
            <FormControlLabel
              value="Major Abnormalities in Vein Structure"
              control={<Radio />}
              label="Major Abnormalities in Vein Structure"
            />
            <FormControlLabel
              value="Severe Shape or Shell Anomalies"
              control={<Radio />}
              label="Severe Shape or Shell Anomalies"
            />
          </RadioGroup>
        </FormControl>
        </Box>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Add Reason for Discard
        </Typography>
        <Box style={{ border: '1px solid #C3CEC7', }} sx={{ p: 1.5, borderRadius: 2 }}>
        <TextField
          label="Enter Comments"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          margin="normal"
        />
        <Box
          sx={{
            border: '1px dashed grey',
            borderRadius: 1,
            textAlign: 'center',
            p: 2,
            mt: 2
          }}
        >
          <IconButton color="primary" component="span">
            <CloudUploadIcon />
          </IconButton>
          <Typography>Drop your image here</Typography>
        </Box>
        </Box>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Necropsy Needed?
        </Typography>
        <Box style={{ border: '1px solid #C3CEC7', }} sx={{ p: 1.5, borderRadius: 2 }}>
        <FormControl component="fieldset">
          <RadioGroup
            row
            value={necropsyNeeded}
            onChange={(e) => setNecropsyNeeded(e.target.value)}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        
        <Button onClick={handleSubmit} color="primary" variant="contained" sx={{width:500}}>
          Submit
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default DiscardForm;