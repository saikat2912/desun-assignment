import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import EggIcon from '@mui/icons-material/Egg';
import PetsIcon from '@mui/icons-material/Pets';
import Card1 from '../../atoms/dashboard_card1/Card1';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import IncubatorIcon from '@mui/icons-material/Devices';

const stats = [
  { icon: <EggIcon style={{ color: '#FF6F61',fontSize:30 ,padding:5,borderRadius:'10px',backgroundColor:'#FFF2EE'}} />, number: 3768, label: 'Total Eggs' ,fontColor:'#FB7F64'},
  { icon: <PetsIcon style={{ color: '#1E88E5' ,fontSize:30,padding:5,borderRadius:'10px',backgroundColor:'#E4F9F8'}} />, number: 198, label: 'Total Species' ,fontColor:'#30BEDE'},
  { icon: <PetsIcon style={{ color: '#43A047' ,fontSize:30,padding:5,borderRadius:'10px',backgroundColor:'#F2FFF8'}} />, number: 842, label: 'Eggs in Nest',fontColor:'#006D35'},
  { icon: <LocalHospitalIcon style={{ color: '#3949AB' ,fontSize:30,padding:5,borderRadius:'10px',backgroundColor:'#E1EFF2'}} />, number: 2926, label: 'Eggs in Nur',fontColor:'#1F515B'},
  { icon: <IncubatorIcon style={{ color: '#00ACC1' ,fontSize:30,padding:5,borderRadius:'10px',backgroundColor:'#F2FFF8'}} />, number: 354, label: 'Incubators',fontColor:'#1F515B'}
];


const StatCards = () => (
  <Container maxWidth="lg" style={{ marginTop: '50px' }}>
    <Grid container spacing={2}>
      {stats.map((stat, index) => (
        <Card1 number={stat.number} title={stat.label} logo={stat.icon} fontcolor={stat.fontColor}/>
      ))}
    </Grid>
  </Container>
);

export default StatCards;