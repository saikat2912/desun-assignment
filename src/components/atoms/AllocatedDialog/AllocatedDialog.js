import React, { useState } from 'react';
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
import { Padding } from '@mui/icons-material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CloseIcon from '@mui/icons-material/Close';


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

    const [length, setLength] = useState('');
    const [lengthUnit, setLengthUnit] = useState('MM');
    const [width, setWidth] = useState('');
    const [widthUnit, setWidthUnit] = useState('MM');
    const [weight, setWeight] = useState('');
    const [weightUnit, setWeightUnit] = useState('Grams');

    const handleSubmit = () => {
        

    };

    return (
        <StyledDialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"

        >
            <DialogTitle><IconButton sx={{ marginTop: 0.25 }}><AssignmentIcon /></IconButton>Send for Incubation <IconButton sx={{ float: 'right' }} onClick={onClose}><CloseIcon /></IconButton></DialogTitle>
            <DialogContent>
                <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
                    <Box style={{ border: '1px solid #C3CEC7', }} sx={{ p: 1.5, borderRadius: 2 }}>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Current State</InputLabel>
                            <Select
                                value={currentState}
                                onChange={(e) => setCurrentState(e.target.value)}
                                label="Current State"
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
                                label="Condition"
                            >
                                <MenuItem value="Warm">Warm</MenuItem>
                                <MenuItem value="Cold">Cold</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        Incubator Selection
                    </Typography>
                    <Box style={{ border: '1px solid #C3CEC7', }} sx={{ p: 1.5, borderRadius: 2 }}>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Select Nursery</InputLabel>
                            <Select
                                value={nursery}
                                onChange={(e) => setNursery(e.target.value)}
                                label="Select Nursery"
                            >
                                <MenuItem value="Nursery 1">Nursery 1</MenuItem>
                                <MenuItem value="Nursery 2">Nursery 2</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Select Room</InputLabel>
                            <Select
                                value={room}
                                onChange={(e) => setRoom(e.target.value)}
                                label="Select Room"
                            >
                                <MenuItem value="Room 1">Room 1</MenuItem>
                                <MenuItem value="Room 2">Room 2</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Select Incubator</InputLabel>
                            <Select
                                value={incubator}
                                onChange={(e) => setIncubator(e.target.value)}
                                label="Select Incubator"
                            >
                                <MenuItem value="Incubator 1">Incubator 1</MenuItem>
                                <MenuItem value="Incubator 2">Incubator 2</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ mt: 2, mb: 2 }}>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography variant="h6">Egg Measurements</Typography>
                            <Button sx={{ textTransform: 'none' }}>Get Values</Button>
                        </Box>
                        <Box style={{ border: '1px solid #C3CEC7', }} sx={{ p: 1.5, borderRadius: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <FormControl fullWidth margin="normal">
                                        <TextField
                                            label="Size Length (Number)"
                                            variant="outlined"
                                            value={length}
                                            onChange={(e) => setLength(e.target.value)}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth margin="normal">
                                        <InputLabel>Unit</InputLabel>
                                        <Select
                                            value={lengthUnit}
                                            onChange={(e) => setLengthUnit(e.target.value)}
                                            label="Unit"
                                        >
                                            <MenuItem value="MM">MM</MenuItem>
                                            <MenuItem value="CM">CM</MenuItem>
                                            <MenuItem value="Inches">Inches</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth margin="normal">
                                        <TextField
                                            label="Size Width (Number)"
                                            variant="outlined"
                                            value={width}
                                            onChange={(e) => setWidth(e.target.value)}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth margin="normal">
                                        <InputLabel>Unit</InputLabel>
                                        <Select
                                            value={widthUnit}
                                            onChange={(e) => setWidthUnit(e.target.value)}
                                            label="Unit"
                                        >
                                            <MenuItem value="MM">MM</MenuItem>
                                            <MenuItem value="CM">CM</MenuItem>
                                            <MenuItem value="Inches">Inches</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth margin="normal">
                                        <TextField
                                            label="Weight (Number)"
                                            variant="outlined"
                                            value={weight}
                                            onChange={(e) => setWeight(e.target.value)}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth margin="normal">
                                        <InputLabel>Unit</InputLabel>
                                        <Select
                                            value={weightUnit}
                                            onChange={(e) => setWeightUnit(e.target.value)}
                                            label="Unit"
                                        >
                                            <MenuItem value="Grams">Grams</MenuItem>
                                            <MenuItem value="Kilograms">Kilograms</MenuItem>
                                            <MenuItem value="Pounds">Pounds</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Button onClick={handleSubmit} color="primary" variant="contained" sx={{width:500}}>
                    Submit
                </Button>
            </Box>
            </DialogActions>
        </StyledDialog>
    );
};

export default AllocatedForm;