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
  Typography,
  Chip,
  TablePagination
} from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import DiscardForm from '../../atoms/DiscardDialog/DiscardDialog';
import AllocatedForm from '../../atoms/AllocatedDialog/AllocatedDialog';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import IncubationComponent from '../IncubationTable/IncubationTable';
import { green, orange, red } from '@mui/material/colors';
import { eggData } from '../../../util/datas';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: '#C1D3D0',
  color: '#44544A',
  fontWeight: 'bold',
}));




const EggList = () => {
  const [currentState, setCurrentState] = useState('');
  const [condition, setCondition] = useState('');
  const [nursery, setNursery] = useState('');
  const [room, setRoom] = useState('');
  const [incubator, setIncubator] = useState('');

  const [open, setOpen] = useState(false);
  const [discardopen, setDiscardOpen] = useState(false);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [tabValue, setTabValue] = useState(0);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const renderTableContent = () => {
    switch (tabValue) {
      case 0:
        return (
          <>
            <TableContainer component={Paper}>
              <Table aria-label="egg table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>No</StyledTableCell>
                    <StyledTableCell>Species</StyledTableCell>
                    <StyledTableCell>Egg Number</StyledTableCell>
                    <StyledTableCell>Site Name</StyledTableCell>
                    <StyledTableCell>Collected On</StyledTableCell>
                    <StyledTableCell>Batch No</StyledTableCell>
                    <StyledTableCell>Collected By</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {eggData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((egg) => (
                      <TableRow
                        key={egg.no}
                        onMouseEnter={() => setHoveredRow(egg.no)}
                        onMouseLeave={() => setHoveredRow(null)}
                        sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}
                      >
                        <TableCell>{egg.no}</TableCell>
                        <TableCell>
                          <Box display="flex" alignItems="center">
                            <Avatar alt={egg.species} src={egg.avatarUrl} />
                            <Box ml={2}>
                              <Typography>
                                <Link to="/egglistdetails">{egg.species}</Link>
                              </Typography>
                              <Typography variant="body2" color="textSecondary">
                                Trichoglossus...
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box ml={2}>
                            <Typography>
                              <b>{egg.eggNumber}</b>
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              <b>
                                <Chip
                                  label="Fertile"
                                  style={{
                                    backgroundColor: green[100],
                                    color: green[800],
                                  }}
                                />
                              </b>
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>{egg.siteName}</TableCell>
                        <TableCell>{egg.collectedOn}</TableCell>
                        <TableCell>{egg.batchNo}</TableCell>
                        <TableCell>
                          {hoveredRow === egg.no ? (
                            <Box display="flex" gap={1}>
                              <Button
                                variant="contained"
                                color="success"
                                size="small"
                                onClick={handleClickOpen}
                              >
                                Allocate
                              </Button>

                              <AllocatedForm open={open} onClose={handleClose} />
                              <Button
                                variant="contained"
                                color="error"
                                size="small"
                                onClick={handleDiscardOpen}
                              >
                                Discard
                              </Button>
                              <DiscardForm
                                open={discardopen}
                                onClose={handleDiscardClose}
                              />
                            </Box>
                          ) : (
                            <Box display="flex" alignItems="center">
                              <Avatar alt={egg.collectedBy} src={egg.avatarPerson} />
                              <Box ml={2}>
                                <Typography>{egg.collectedBy}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                  {egg.designation}
                                </Typography>
                              </Box>
                            </Box>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={eggData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        );
      case 1:
        return <IncubationComponent />;
      case 2:
        return null;
      case 3:
        return null;
      default:
        return null;
    }
  };

  return (
    <>
      <Box style={{ marginLeft: '250px', padding: '20px', width: '80vw' }}>
        <Typography variant="subtitle1" gutterBottom>
          <span style={{ color: '#BAC3BE' }}> Egg Module</span> / Egg List
        </Typography>
        <Box
          sx={{
            p: 2,
            backgroundColor: '#fff',
            borderRadius: 1,
            padding: 2,
            boxShadow: 1,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Egg List
          </Typography>

          <Box display="flex" justifyContent="space-between" alignItems="center" my={2}>
            <IconButton>
              <FilterListIcon />
            </IconButton>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search"
              InputProps={{
                startAdornment: <SearchIcon />,
              }}
            />
          </Box>
          <Tabs value={tabValue} onChange={handleTabChange} sx={{ marginBottom: '20px' }}>
            <Tab label="Received - 24" />
            <Tab label="Incubation - 100" />
            <Tab label="Hatched - 100" />
            <Tab label="Discarded - 12" />
          </Tabs>

          {renderTableContent()}
        </Box>
      </Box>
    </>
  );
};

export default EggList;