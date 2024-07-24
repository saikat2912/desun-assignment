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

    Typography
} from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import DiscardForm from '../../atoms/DiscardDialog/DiscardDialog';
import AllocatedForm from '../../atoms/AllocatedDialog/AllocatedDialog';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';


const eggData = [
    {
        no: 1,
        species: 'Rainbow Lorikeet',
        eggNumber: '0273 / 24',
        siteName: 'Site Name XYZ',
        collectedOn: '10 Apr 2024',
        batchNo: '2024/0001234/3A',
        status: 'Intact',
        collectedBy: 'Jordan Stevenson',
        designation: 'Designation',
        avatarUrl: '/static/images/avatar/1.jpg'
    },
    {
        no: 2,
        species: 'Rainbow Lorikeet',
        eggNumber: '0273 / 24',
        siteName: 'Site Name XYZ',
        collectedOn: '10 Apr 2024',
        batchNo: '2024/0001234/3A',
        status: 'Rotten',
        collectedBy: 'Jordan Stevenson',
        designation: 'Designation',
        avatarUrl: '/static/images/avatar/1.jpg'
    },
    // Add more data as needed
];
const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(2),
        margin: 0,
    },
}));

const statusColors = {
    Intact: 'lightgreen',
    Rotten: 'lightcoral',
    Cracked: 'lightyellow',
    Broken: 'lightpink'
};

const EggList = () => {
    const [currentState, setCurrentState] = React.useState('');
    const [condition, setCondition] = React.useState('');
    const [nursery, setNursery] = React.useState('');
    const [room, setRoom] = React.useState('');
    const [incubator, setIncubator] = React.useState('');

    const [open, setOpen] = useState(false);
    const [discardopen, setDiscardOpen] = React.useState(false);

    const handleDiscardOpen = () => {
        setDiscardOpen(true);
    };
  
    const handleDiscardClose = () => {
        setDiscardOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {

    }
    return (
        <Box sx={{ p: 2 }} style={{ marginLeft: '250px', padding: '20px', width: '80vw' }}>
            <Typography variant="h6" gutterBottom>
                Egg List
            </Typography>
            <Tabs value={0}>
                <Tab label="Received - 24" />
                <Tab label="Incubation - 100" />
                <Tab label="Hatched - 100" />
                <Tab label="Discarded - 12" />
            </Tabs>
            <Box display="flex" justifyContent="space-between" alignItems="center" my={2}>
                <IconButton>
                    <FilterListIcon />
                </IconButton>
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search"
                    InputProps={{
                        startAdornment: <SearchIcon />
                    }}
                />
            </Box>
            <TableContainer component={Paper}>
                <Table aria-label="egg table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell>Species</TableCell>
                            <TableCell>Egg Number</TableCell>
                            <TableCell>Site Name</TableCell>
                            <TableCell>Collected On</TableCell>
                            <TableCell>Batch No</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actions</TableCell>
                            <TableCell>Collected By</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {eggData.map((egg) => (
                            <TableRow key={egg.no}>
                                <TableCell>{egg.no}</TableCell>
                                <TableCell>
                                    <Box display="flex" alignItems="center">
                                        <Avatar alt={egg.species} src={egg.avatarUrl} />
                                        <Box ml={2}>
                                            <Typography><Link to="/egglistdetails">{egg.species}</Link></Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Trichoglossus...
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>{egg.eggNumber}</TableCell>
                                <TableCell>{egg.siteName}</TableCell>
                                <TableCell>{egg.collectedOn}</TableCell>
                                <TableCell>{egg.batchNo}</TableCell>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            backgroundColor: statusColors[egg.status],
                                            borderRadius: 1,
                                            padding: '2px 8px'
                                        }}
                                    >
                                        {egg.status}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Button variant="contained" color="success" size="small" onClick={handleClickOpen}>
                                        Allocate
                                    </Button>
                                    <AllocatedForm open={open} onClose={handleClose}/>
                                    <Button variant="contained" color="error" size="small" sx={{ ml: 1 }}  onClick={handleDiscardOpen}>
                                        Discard
                                    </Button>
                                    <DiscardForm open={discardopen} onClose={handleDiscardClose} />
                                </TableCell>
                                <TableCell>
                                    <Box display="flex" alignItems="center">
                                        <Avatar alt={egg.collectedBy} src={egg.avatarUrl} />
                                        <Box ml={2}>
                                            <Typography>{egg.collectedBy}</Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {egg.designation}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default EggList;