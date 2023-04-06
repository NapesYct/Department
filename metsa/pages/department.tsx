import React from 'react';
import Footer from '../components/footer/Footer'
import ExecutivesCard from '../components/HomeComponents/executives/ExecutivesCard'
import Header from '../components/HomeComponents/Header';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Head from 'next/head'


interface Props {
  title: string,
  description: string,
  bgColor: string
}

const OurVision: React.FC<Props> = ({ title, description, bgColor }) => {
  return (
    <>
      <Box className={`${bgColor} px-10 py-20 items-center shadow-2xl`}>
        <Typography textAlign={'center'} variant="h5" color="#fff">{title}</Typography>
        <Typography textAlign={'center'} variant="body1" color="#fff">{description}</Typography>
      </Box>
    </>
  )
}


const department = () => {
  return (
    <>
      <Head>
        <title>METSA | DEPARTMENT PAGE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>
        <div className='bg-gradient-to-r from-black  to-red-900 py-40'>
          <Typography className='text-center text-2xl md:text-5xl' variant="h3" color="#fff">EXPLORE OUR DEPARTMENT</Typography>
        </div>

        <Box className='grid grid-cols-1 md:grid-cols-3 mb-20'>
          <OurVision bgColor='bg-gray-800' title='Our Vision' description='Nobis ratione, amet culpa ipsa esse itaque molestias, explicabo dicta ex totam similique sapiente dolorum vitae?' />
          <OurVision bgColor='bg-red-500' title='Our Mission' description='Nobis ratione, amet culpa ipsa esse itaque molestias, explicabo dicta ex totam similique sapiente dolorum vitae?' />
          <OurVision bgColor='bg-gray-800' title='Our Motto' description='Nobis ratione, amet culpa ipsa esse itaque molestias, explicabo dicta ex totam similique sapiente dolorum vitae?' />
        </Box>
        <Box className="md:px-10">
          <Box className='mb-8'>
            <Typography className='text-2xl mb-2 md:text-4xl font-bold' variant="h4" textAlign={"center"} color="initial">About Our Department</Typography>
            <Typography className='text-sm md:text-lg' textAlign={"center"} variant="subtitle1" color="initial">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, quam iste? Exercitationem, quasi inventore explicabo cum in ducimus repellat optio.</Typography>
          </Box>

          <Box className='grid grid-cols-1 md:grid-cols-2 mb-16'>
            <img className=' md:my-auto' src="/images/school.jpg" alt="" />
            <Box className='flex flex-col py-10 md:py-0 items-start justify-center space-y-5 px-10 bg-red-500 shadow-sm'>
              <Typography variant="h4" className='text-2xl text-center md:text-start md:text-5xl' gutterBottom color="#fff">
                Our Department
              </Typography>
              <Typography variant="body2" color="#fff">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, officia fugiat numquam culpa reiciendis repellendus doloribus ducimus.
                Sed sapiente harum est accusantium repudiandae dolorum consequuntur ad, voluptatum quos similique! Modi veniam pariatur laudantium aut! Nobis ratione, amet culpa ipsa esse itaque molestias, explicabo dicta
              </Typography>
              <Typography variant="body2" color="#fff">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Typography>

            </Box>

          </Box>
        </Box>
      </div>
      <Footer />
    </>
  )
}

export default department