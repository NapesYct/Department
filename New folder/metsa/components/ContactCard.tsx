import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';


interface Props {
  icon: any,
  title: string,
  desc1: string,
  desc2?: string
}

const ContactCard: React.FC<Props> = ({ icon, title, desc1, desc2 }) => {
  return (
    <div className='rounded border-red-500 py-5 px-8 flex flex-col items-center space-y-2'>
      <Card sx={{ height: 200, width: 300 }}>
        <CardActionArea>

          <CardContent>
            <div className='bg-white rounded-full flex items-center justify-center '>
              <span className=''>{icon}</span>
            </div>

            <Box className="flex flex-col items-center justify-center space-y-4">
              <Typography variant="subtitle1">{title}</Typography>
              <Typography variant="subtitle1">{desc1}</Typography>
              <Typography variant="subtitle1">{desc2}</Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default ContactCard