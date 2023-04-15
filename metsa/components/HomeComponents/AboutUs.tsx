import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Link from 'next/link';


const AboutUs = () => {
  return (
    <>

      <Box className='mb-8 md:px-10'>
        <Typography className='text-2xl mb-2 md:text-4xl font-bold' variant="h4" textAlign={"center"} color="initial">About Our Department</Typography>
        <Typography className='text-sm md:text-lg' textAlign={"center"} variant="subtitle1" color="initial">Lorem ipsum dolor sit, amet consectetur .</Typography>
      </Box>

      <Box className='grid grid-cols-1 md:grid-cols-2 mb-16'>
        <img className=' md:my-auto' src="/images/school.jpg" alt="" />
        <Box className='flex flex-col items-start justify-center space-y-5 px-3 md:px-10 bg-red-500 shadow-sm'>
          <Typography variant="h4" gutterBottom color="#fff" sx={{
            fontSize: {
              xs: '1.5rem',
              md: '3rem',
            },
            textAlign: {
              xs: 'center',
              md: 'start'
            },
            color: 'white',
            marginTop: '1.5rem'

          }}>
            Our Department
          </Typography>
          <Typography sx={{ lineHeight: '25px' }} variant="body1" color="#fff">
            Mechatronics Engineering Department is an interdisciplinary field that combines the principles of mechanical, electrical, and computer engineering to design and develop advanced systems and devices. By studying in this department, students are equipped with a diverse skill set that enables them to solve complex problems and create innovative solutions that bridge the gap between mechanical and electronic systems...
          </Typography>
          <Link href="/department">
            <Button size="small" variant='contained' color="primary" sx={{
              backgroundColor: 'red',
              color: 'white',
              transition: 'all',
              transitionTimingFunction: 'ease-in-out',
              transitionDelay: '75ms',
              marginBottom: '1rem',
              boxShadow: '2px 2px 5px black',
              ":hover": {
                backgroundColor: 'black',
              }
            }}>
              Read More
            </Button>
          </Link>
        </Box>

      </Box>


    </>
  )
}

export default AboutUs