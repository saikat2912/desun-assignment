import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import EggIcon from '@mui/icons-material/Egg';
import PetsIcon from '@mui/icons-material/Pets';

import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import IncubatorIcon from '@mui/icons-material/Devices';

const stats = [
  { icon: <EggIcon style={{ color: '#FF6F61' }} />, number: 3768, label: 'Total Eggs' },
  { icon: <PetsIcon style={{ color: '#1E88E5' }} />, number: 198, label: 'Total Species' },
  { icon: <PetsIcon style={{ color: '#43A047' }} />, number: 842, label: 'Eggs in Nest' },
  { icon: <LocalHospitalIcon style={{ color: '#3949AB' }} />, number: 2926, label: 'Eggs in Nursery' },
  { icon: <IncubatorIcon style={{ color: '#00ACC1' }} />, number: 354, label: 'Total Incubators' }
];

const StatCard = ({ icon, number, label }) => (
  <Grid item xs={12} sm={6} md={4} lg={2}>
    <Paper style={{ padding: '16px', textAlign: 'center' }}>
      <div style={{ fontSize: '2rem' }}>{icon}</div>
      <Typography variant="h4" component="p">{number}</Typography>
      <Typography variant="subtitle1">{label}</Typography>
    </Paper>
  </Grid>
);

const StatCards = () => (
  <Container maxWidth="lg" style={{ marginTop: '50px' }}>
    <Grid container spacing={4}>
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </Grid>
  </Container>
);

export default StatCards;