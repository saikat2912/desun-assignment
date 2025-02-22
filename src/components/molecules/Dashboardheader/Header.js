import React from 'react';
import { Box, TextField, Typography, IconButton } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import SearchIcon from '@mui/icons-material/Search';

const DashboardHeader = () => {
    const [fromDate, setFromDate] = React.useState(null);
    const [tilDate, setTilDate] = React.useState(null);
    const [searchQuery, setSearchQuery] = React.useState('');

    const handleSearch = () => {

    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} >
            <Box p={2} >
                <Typography variant="subtitle1" gutterBottom>
                    <span style={{ color: '#BAC3BE' }}> Egg Module</span>  / Dashboard
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Current Stats
                </Typography>
                <Box display="flex" alignItems="center" gap={2}>
                    <DatePicker
                        label="From Date"
                        value={fromDate}
                        onChange={(newValue) => setFromDate(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <DatePicker
                        label="Til Date"
                        value={tilDate}
                        onChange={(newValue) => setTilDate(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <TextField
                        label="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        variant="outlined"
                        size="medium"
                        sx={{
                            width: '300px',
                            '& .MuiInputBase-input': {
                                padding: '18px 18px',
                                fontSize: '1rem',
                                height: '1.5em',
                            },
                            '& .MuiInputLabel-root': {
                                fontSize: '0.875rem',
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <IconButton onClick={handleSearch}>
                                    <SearchIcon />
                                </IconButton>
                            ),
                        }}
                    />
                </Box>
            </Box>
        </LocalizationProvider>
    );
};

export default DashboardHeader;