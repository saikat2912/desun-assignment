import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function EggDetailCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      
        <CardMedia
          component="img"
          height="200"
          image="card_details/parrot.jpg"
          alt="parrot"
        />
    </Card>
  );
}