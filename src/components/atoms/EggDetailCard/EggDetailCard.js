import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import parrot from "../../../img/card_details/parrot.jpg"

export default function EggDetailCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      
        <CardMedia
          component="img"
          height="200"
          image={parrot}
          alt="parrot"
        />
    </Card>
  );
}