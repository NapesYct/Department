import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface Props {
  name: string
  title: string
  mainImage: string
}

const ExecutivesCard = ({ name, title, mainImage }: Props) => {
  return (
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="480"
          image={mainImage}
          alt="green iguana"
          className='rounded-full h-40 w-40 mx-auto mt-5'
        />
        <CardContent>
          <Typography className='text-center' variant="body2" color="text.secondary">
            {title}
          </Typography>
          <Typography className='text-center' gutterBottom variant="h5" component="div">
            {name}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ExecutivesCard