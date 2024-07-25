import React, { useState } from 'react';
import {
    Box,
    TextField,
    Typography,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Chip, Avatar,
    TablePagination
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import SearchIcon from '@mui/icons-material/Search';
import { green, orange, red } from '@mui/material/colors';
import { styled } from '@mui/system';

const StyledTableContainer = styled(TableContainer)({
    minWidth: 650,
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: '#C1D3D0',
    color: '#44544A',
    fontWeight: 'bold',
}));

const StyledChip = styled(Chip)(({ theme, status }) => ({
    backgroundColor: status === 'Completed' ? green[100] : status === 'In Progress' ? orange[100] : red[100],
    color: status === 'Completed' ? green[800] : status === 'In Progress' ? orange[800] : red[800],
}));

const rows = [
    { eggNumber: '0273 / 24', status: 'Completed', species: 'Rainbow Lorikeet', transferredFrom: 'Site Name XYZ', date: '10 Apr 2024', receivingAt: 'Site Name XYZ', nursery: 'NUR1234' },
    { eggNumber: '0273 / 24', status: 'In Progress', species: 'Rainbow Lorikeet', transferredFrom: 'Site Name XYZ', date: '10 Apr 2024', receivingAt: 'Site Name XYZ', nursery: 'NUR1234' },
    { eggNumber: '0273 / 24', status: 'Cancelled', species: 'Rainbow Lorikeet', transferredFrom: 'Site Name XYZ', date: '10 Apr 2024', receivingAt: 'Site Name XYZ', nursery: 'NUR1234' },
    { eggNumber: '0273 / 24', status: 'In Progress', species: 'Rainbow Lorikeet', transferredFrom: 'Site Name XYZ', date: '10 Apr 2024', receivingAt: 'Site Name XYZ', nursery: 'NUR1234' },
    { eggNumber: '0273 / 24', status: 'In Progress', species: 'Rainbow Lorikeet', transferredFrom: 'Site Name XYZ', date: '10 Apr 2024', receivingAt: 'Site Name XYZ', nursery: 'NUR1234' },
    { eggNumber: '0273 / 24', status: 'Completed', species: 'Rainbow Lorikeet', transferredFrom: 'Site Name XYZ', date: '10 Apr 2024', receivingAt: 'Site Name XYZ', nursery: 'NUR1234' },
    { eggNumber: '0273 / 24', status: 'Completed', species: 'Rainbow Lorikeet', transferredFrom: 'Site Name XYZ', date: '10 Apr 2024', receivingAt: 'Site Name XYZ', nursery: 'NUR1234' },
    { eggNumber: '0273 / 24', status: 'Completed', species: 'Rainbow Lorikeet', transferredFrom: 'Site Name XYZ', date: '10 Apr 2024', receivingAt: 'Site Name XYZ', nursery: 'NUR1234' },
    { eggNumber: '0273 / 24', status: 'In Progress', species: 'Rainbow Lorikeet', transferredFrom: 'Site Name XYZ', date: '10 Apr 2024', receivingAt: 'Site Name XYZ', nursery: 'NUR1234' },
];
const DashboardTable = () => {
    const [fromDate, setFromDate] = React.useState(null);
    const [tilDate, setTilDate] = React.useState(null);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [fromSite, setFromSite] = React.useState('');
    const [receivingSite, setReceivingSite] = React.useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const rows = [
        { no: 1, eggNumber: '0273 / 24', status: 'Completed', species: 'Rainbow Lorikeet', transferredFrom: 'Site Name XYZ', date: '10 Apr 2024', receivingAt: 'Site Name XYZ', nursery: 'NUR1234', avatarUrl: 'bird.jpg' },
        // Add more rows as needed
    ];

    const displayedRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    const handleSearch = () => {
        // Implement search logic here
        console.log(`Searching from ${fromDate} to ${tilDate} with query "${searchQuery}"`);
    };



    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box p={2} sx={{
                backgroundColor: '#fff',
                borderRadius: 1,
                padding: 2,
                boxShadow: 1,
            }}>
                <Typography variant="h6" gutterBottom>
                    Transfer Details
                </Typography>
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                    <TextField
                        label="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <IconButton onClick={handleSearch}>
                                    <SearchIcon />
                                </IconButton>
                            ),
                        }}
                    />
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
                    <FormControl>
                        <InputLabel>From Site</InputLabel>
                        <Select
                            value={fromSite}
                            onChange={(e) => setFromSite(e.target.value)}
                            label="From Site"
                        >
                            <MenuItem value="Site 1">Site 1</MenuItem>
                            <MenuItem value="Site 2">Site 2</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Receiving Site</InputLabel>
                        <Select
                            value={receivingSite}
                            onChange={(e) => setReceivingSite(e.target.value)}
                            label="Receiving Site"
                        >
                            <MenuItem value="Site 1">Site 1</MenuItem>
                            <MenuItem value="Site 2">Site 2</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <StyledTableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>No</StyledTableCell>
                                <StyledTableCell>Egg Number</StyledTableCell>
                                <StyledTableCell>Status</StyledTableCell>
                                <StyledTableCell>Species</StyledTableCell>
                                <StyledTableCell>Transferred From</StyledTableCell>
                                <StyledTableCell>Date</StyledTableCell>
                                <StyledTableCell>Receiving At</StyledTableCell>
                                <StyledTableCell>Date</StyledTableCell>
                                <StyledTableCell>Nursery</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {displayedRows.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
                                    <TableCell>
                                        <Box ml={2}>
                                            <Typography><b>{row.eggNumber}</b></Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                <b><Chip label="Fertile" style={{ backgroundColor: green[100], color: green[800] }} /></b>
                                            </Typography>
                                        </Box>

                                    </TableCell>
                                    <TableCell>
                                        <b><StyledChip
                                            label={row.status}
                                            status={row.status}
                                        /></b>
                                    </TableCell>
                                    <TableCell>
                                        <Box display="flex" alignItems="center">
                                            <Avatar alt={row.species} src={row.avatarUrl} />
                                            <Box ml={2}>
                                                <Typography ><b>{row.species}</b></Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    Trichoglossus...
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell>{row.transferredFrom}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.receivingAt}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.nursery}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 50]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </StyledTableContainer>
            </Box>
        </LocalizationProvider>
    );
};

export default DashboardTable;