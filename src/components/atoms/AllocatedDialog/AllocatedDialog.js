import React from 'react';
import {
    Avatar,
    Box,
    Button,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tabs,
    Tab,
  
    Typography, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem, FormControl, InputLabel, Grid
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/system';


const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(2),
        margin: 0,
    },
}));

const AllocatedForm = ({ open, onClose }) => {
    const [currentState, setCurrentState] = React.useState('');
    const [condition, setCondition] = React.useState('');
    const [nursery, setNursery] = React.useState('');
    const [room, setRoom] = React.useState('');
    const [incubator, setIncubator] = React.useState('');

  const handleSubmit = () => {
    // Handle form submission logic
  
  };

  return (
    <StyledDialog
    open={open}
    onClose={onClose}
    fullWidth
    maxWidth="sm"
>
    <DialogTitle>Send for Incubation</DialogTitle>
    <DialogContent>
        <FormControl fullWidth margin="normal">
            <InputLabel>Current State</InputLabel>
            <Select
                value={currentState}
                onChange={(e) => setCurrentState(e.target.value)}
            >
                <MenuItem value="Intact">Intact</MenuItem>
                <MenuItem value="Cracked">Cracked</MenuItem>
                <MenuItem value="Broken">Broken</MenuItem>
            </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
            <InputLabel>Condition</InputLabel>
            <Select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
            >
                <MenuItem value="Warm">Warm</MenuItem>
                <MenuItem value="Cool">Cool</MenuItem>
                <MenuItem value="Room Temperature">Room Temperature</MenuItem>
            </Select>
        </FormControl>
        <Typography variant="h6" gutterBottom>
            Incubator Selection
        </Typography>
        <FormControl fullWidth margin="normal">
            <InputLabel>Select Nursery</InputLabel>
            <Select
                value={nursery}
                onChange={(e) => setNursery(e.target.value)}
            >
                <MenuItem value="Nursery1">Nursery Name 1</MenuItem>
                <MenuItem value="Nursery2">Nursery Name 2</MenuItem>
            </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
            <InputLabel>Select Room</InputLabel>
            <Select
                value={room}
                onChange={(e) => setRoom(e.target.value)}
            >
                <MenuItem value="Room1">Room 1</MenuItem>
                <MenuItem value="Room2">Room 2</MenuItem>
            </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
            <InputLabel>Select Incubator</InputLabel>
            <Select
                value={incubator}
                onChange={(e) => setIncubator(e.target.value)}
            >
                <MenuItem value="Incubator1">Incubator 1</MenuItem>
                <MenuItem value="Incubator2">Incubator 2</MenuItem>
            </Select>
        </FormControl>
        <Typography variant="h6" gutterBottom>
            Egg Measurements
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
            <TextField
                label="Weight"
                variant="outlined"
                margin="normal"
                type="number"
                style={{ flex: 1, marginRight: '8px' }}
            />
            <TextField
                label="Unit"
                variant="outlined"
                margin="normal"
                style={{ flex: 1, marginLeft: '8px' }}
            />
        </Box>
    </DialogContent>
    <DialogActions>
        <Button onClick={onClose} color="primary">
            Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
            Submit
        </Button>
    </DialogActions>
</StyledDialog>
  );
};

export default AllocatedForm;