import React from 'react';
import { Box, Typography, Grid, Avatar ,Paper} from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { blue, green, teal, red } from '@mui/material/colors';

const data = [
  { name: 'In Nest', value: 48, color: blue[400] },
  { name: 'In Nursery', value: 99, color: green[300] },
  { name: 'Good Condition', value: 82, color: teal[300] },
  { name: 'Discarded', value: 33, color: red[200] },
];

const SummaryCard = () => {
  return (
    <Box component={Paper} padding={2} borderRadius={2}>
      <Typography variant="h6" component="div">
        Todays Collection - <span style={{ color: green[700] }}>262 Eggs</span>
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={7}>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={data} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              {data.map((entry, index) => (
                <Bar key={`bar-${index}`} dataKey="value" fill={entry.color} />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </Grid>
        <Grid item xs={5}>
          {data.map((entry, index) => (
            <Box key={index} display="flex" alignItems="center" mb={1}>
              <Avatar style={{ backgroundColor: entry.color, marginRight: 8 }} />
              <Typography variant="body1" style={{ color: entry.color, marginRight: 4 }}>
                {entry.value}
              </Typography>
              <Typography variant="body2">{entry.name}</Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SummaryCard;
