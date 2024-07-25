import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  TablePagination
} from '@mui/material';
import { styled } from '@mui/system';
import { green } from '@mui/material/colors';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: '#C1D3D0',
  color: '#44544A',
  fontWeight: 'bold',
}));

const incubationData = [
  {
    no: 1,
    eggNumber: '0273 / 24',
    species: 'Rainbow Lorikeet',
    daysIncubation: 2,
    stage: 'Infertile',
    condition: 'Warm',
    currentWeight: 300,
    initialWeight: 315,
    initialSizeL: '33.41 mm',
    initialSizeW: '22.72 mm',
    eggClutch: 3,
    clutchId: '1234',
    site: 'Site Name',
    nursery: 'Nursery Name',
    enclosure: '24 D',
    collectedOn: '1 Mar 2024',
    collectedBy: 'Jordan Stevenson',
    avatarPerson: 'modi.jpg',
    designation: 'Designation'
  },
  {
    no: 2,
    eggNumber: '0273 / 24',
    species: 'Rainbow Lorikeet',
    daysIncubation: 2,
    stage: 'Infertile',
    condition: 'Warm',
    currentWeight: 300,
    initialWeight: 315,
    initialSizeL: '33.41 mm',
    initialSizeW: '22.72 mm',
    eggClutch: 3,
    clutchId: '1234',
    site: 'Site Name',
    nursery: 'Nursery Name',
    enclosure: '24 D',
    collectedOn: '1 Mar 2024',
    collectedBy: 'Jordan Stevenson',
    avatarPerson: 'modi.jpg',
    designation: 'Designation'
  },
  {
    no: 3,
    eggNumber: '0273 / 24',
    species: 'Rainbow Lorikeet',
    daysIncubation: 2,
    stage: 'Infertile',
    condition: 'Warm',
    currentWeight: 300,
    initialWeight: 315,
    initialSizeL: '33.41 mm',
    initialSizeW: '22.72 mm',
    eggClutch: 3,
    clutchId: '1234',
    site: 'Site Name',
    nursery: 'Nursery Name',
    enclosure: '24 D',
    collectedOn: '1 Mar 2024',
    collectedBy: 'Jordan Stevenson',
    avatarPerson: 'modi.jpg',
    designation: 'Designation'
  },
  {
    no: 4,
    eggNumber: '0273 / 24',
    species: 'Rainbow Lorikeet',
    daysIncubation: 2,
    stage: 'Infertile',
    condition: 'Warm',
    currentWeight: 300,
    initialWeight: 315,
    initialSizeL: '33.41 mm',
    initialSizeW: '22.72 mm',
    eggClutch: 3,
    clutchId: '1234',
    site: 'Site Name',
    nursery: 'Nursery Name',
    enclosure: '24 D',
    collectedOn: '1 Mar 2024',
    collectedBy: 'Jordan Stevenson',
    avatarPerson: 'modi.jpg',
    designation: 'Designation'
  },
  {
    no: 5,
    eggNumber: '0273 / 24',
    species: 'Rainbow Lorikeet',
    daysIncubation: 2,
    stage: 'Infertile',
    condition: 'Warm',
    currentWeight: 300,
    initialWeight: 315,
    initialSizeL: '33.41 mm',
    initialSizeW: '22.72 mm',
    eggClutch: 3,
    clutchId: '1234',
    site: 'Site Name',
    nursery: 'Nursery Name',
    enclosure: '24 D',
    collectedOn: '1 Mar 2024',
    collectedBy: 'Jordan Stevenson',
    avatarPerson: 'modi.jpg',
    designation: 'Designation'
  },
  {
    no: 6,
    eggNumber: '0273 / 24',
    species: 'Rainbow Lorikeet',
    daysIncubation: 2,
    stage: 'Infertile',
    condition: 'Warm',
    currentWeight: 300,
    initialWeight: 315,
    initialSizeL: '33.41 mm',
    initialSizeW: '22.72 mm',
    eggClutch: 3,
    clutchId: '1234',
    site: 'Site Name',
    nursery: 'Nursery Name',
    enclosure: '24 D',
    collectedOn: '1 Mar 2024',
    collectedBy: 'Jordan Stevenson',
    avatarPerson: 'modi.jpg',
    designation: 'Designation'
  },
  {
    no: 7,
    eggNumber: '0273 / 24',
    species: 'Rainbow Lorikeet',
    daysIncubation: 2,
    stage: 'Infertile',
    condition: 'Warm',
    currentWeight: 300,
    initialWeight: 315,
    initialSizeL: '33.41 mm',
    initialSizeW: '22.72 mm',
    eggClutch: 3,
    clutchId: '1234',
    site: 'Site Name',
    nursery: 'Nursery Name',
    enclosure: '24 D',
    collectedOn: '1 Mar 2024',
    collectedBy: 'Jordan Stevenson',
    avatarPerson: 'modi.jpg',
    designation: 'Designation'
  },
  {
    no: 8,
    eggNumber: '0273 / 24',
    species: 'Rainbow Lorikeet',
    daysIncubation: 2,
    stage: 'Infertile',
    condition: 'Warm',
    currentWeight: 300,
    initialWeight: 315,
    initialSizeL: '33.41 mm',
    initialSizeW: '22.72 mm',
    eggClutch: 3,
    clutchId: '1234',
    site: 'Site Name',
    nursery: 'Nursery Name',
    enclosure: '24 D',
    collectedOn: '1 Mar 2024',
    collectedBy: 'Jordan Stevenson',
    avatarPerson: 'modi.jpg',
    designation: 'Designation'
  },
  {
    no: 9,
    eggNumber: '0273 / 24',
    species: 'Rainbow Lorikeet',
    daysIncubation: 2,
    stage: 'Infertile',
    condition: 'Warm',
    currentWeight: 300,
    initialWeight: 315,
    initialSizeL: '33.41 mm',
    initialSizeW: '22.72 mm',
    eggClutch: 3,
    clutchId: '1234',
    site: 'Site Name',
    nursery: 'Nursery Name',
    enclosure: '24 D',
    collectedOn: '1 Mar 2024',
    collectedBy: 'Jordan Stevenson',
    avatarPerson: 'modi.jpg',
    designation: 'Designation'
  },
  {
    no: 10,
    eggNumber: '0273 / 24',
    species: 'Rainbow Lorikeet',
    daysIncubation: 2,
    stage: 'Infertile',
    condition: 'Warm',
    currentWeight: 300,
    initialWeight: 315,
    initialSizeL: '33.41 mm',
    initialSizeW: '22.72 mm',
    eggClutch: 3,
    clutchId: '1234',
    site: 'Site Name',
    nursery: 'Nursery Name',
    enclosure: '24 D',
    collectedOn: '1 Mar 2024',
    collectedBy: 'Jordan Stevenson',
    avatarPerson: 'modi.jpg',
    designation: 'Designation'
  }
];

const IncubationComponent = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ overflowX: 'auto', width: '100%' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1200 }} stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell
                sx={{
                  position: 'sticky',
                  left: 0,
                  backgroundColor: '#C1D3D0',
                  zIndex: 1,
                }}
              >
                No
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  position: 'sticky',
                  left: 50,
                  backgroundColor: '#C1D3D0',
                  zIndex: 1,
                }}
              >
                Egg Number
              </StyledTableCell>
              <StyledTableCell>Species</StyledTableCell>
              <StyledTableCell>Days In Incubation</StyledTableCell>
              <StyledTableCell>Stage</StyledTableCell>
              <StyledTableCell>Condition</StyledTableCell>
              <StyledTableCell>Current Weight</StyledTableCell>
              <StyledTableCell>Initial Weight</StyledTableCell>
              <StyledTableCell>Initial Size - L</StyledTableCell>
              <StyledTableCell>Initial Size - W</StyledTableCell>
              <StyledTableCell>No. Egg / Clutch</StyledTableCell>
              <StyledTableCell>Clutch ID</StyledTableCell>
              <StyledTableCell>Site</StyledTableCell>
              <StyledTableCell>Nursery</StyledTableCell>
              <StyledTableCell>Enclosure</StyledTableCell>
              <StyledTableCell>Collected On</StyledTableCell>
              <StyledTableCell>Collected By</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {incubationData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((egg) => (
                <TableRow key={egg.no}>
                  <TableCell
                    sx={{
                      position: 'sticky',
                      left: 0,
                      backgroundColor: '#ffffff',
                      zIndex: 1,
                    }}
                  >
                    {egg.no}
                  </TableCell>
                  <TableCell
                    sx={{
                      position: 'sticky',
                      left: 50,
                      backgroundColor: '#ffffff',
                      zIndex: 1,
                    }}
                  >
                    <Box display="flex" alignItems="center">
                      <Avatar alt={egg.species} src='egg.jpg' />
                      <Box ml={2}>
                        <Typography><b>{egg.eggNumber}</b></Typography>
                        <Typography variant="body2" color="textSecondary">
                          <b><Chip label="Fertile" style={{ backgroundColor: green[100], color: green[800] }} /></b>
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <Avatar alt={egg.species} src='bird.jpg' />
                      <Box ml={2}>
                        <Typography><b>{egg.species}</b></Typography>
                        <Typography variant="body2" color="textSecondary">
                          Trichoglossus...
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{egg.daysIncubation}</TableCell>
                  <TableCell>{egg.stage}</TableCell>
                  <TableCell>{egg.condition}</TableCell>
                  <TableCell>{egg.currentWeight}</TableCell>
                  <TableCell>{egg.initialWeight}</TableCell>
                  <TableCell>{egg.initialSizeL}</TableCell>
                  <TableCell>{egg.initialSizeW}</TableCell>
                  <TableCell>{egg.eggClutch}</TableCell>
                  <TableCell>{egg.clutchId}</TableCell>
                  <TableCell>{egg.site}</TableCell>
                  <TableCell>{egg.nursery}</TableCell>
                  <TableCell>{egg.enclosure}</TableCell>
                  <TableCell>{egg.collectedOn}</TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <Avatar alt={egg.collectedBy} src={egg.avatarPerson} />
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
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={incubationData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default IncubationComponent;