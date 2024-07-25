import React from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardCard = () => {
  const theme = useTheme();

  const data = {
    labels: ['In Nest', 'In Nursery', 'Good Condition', 'Discarded'],
    datasets: [
      {
        label: 'Eggs',
        data: [48, 99, 82, 33],
        backgroundColor: [
          theme.palette.primary.light,
          theme.palette.success.light,
          theme.palette.info.light,
          theme.palette.error.light,
        ],
        borderRadius: 10,
        barThickness: 20,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        borderRadius: 1,
        padding: 2,
        boxShadow: 1,
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        <b>Todays Collection - <span style={{ color: theme.palette.success.main }}>262 Eggs</span></b>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Bar data={data} options={options} />
        </Grid>
        <Grid item xs={5}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

            <Grid container gap={3}>

           <Grid item xs={5}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: theme.palette.primary.light,
                  mr: 1,
                }}
              />
              <Typography variant="h6" sx={{ flex: 1 }}>
                In Nest
              </Typography>
              <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
                48
              </Typography>
            </Box>
            </Grid>
            <Grid item  xs={5}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: theme.palette.success.light,
                  mr: 1,
                }}
              />
              <Typography variant="h6" sx={{ flex: 1 }}>
                In Nursery
              </Typography>
              <Typography variant="h6" sx={{ color: theme.palette.success.main }}>
                99
              </Typography>
            </Box>
            </Grid>
            <Grid item xs={5}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: theme.palette.info.light,
                  mr: 1,
                }}
              />
              <Typography variant="h6" sx={{ flex: 1 }}>
                Good Condition
              </Typography>
              <Typography variant="h6" sx={{ color: theme.palette.info.main }}>
                82
              </Typography>
            </Box>
            </Grid>
            <Grid item xs={5}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: theme.palette.error.light,
                  mr: 1,
                }}
              />
              <Typography variant="h6" sx={{ flex: 1 }}>
                Discarded
              </Typography>
              <Typography variant="h6" sx={{ color: theme.palette.error.main }}>
                33
              </Typography>
            </Box>
            </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardCard;