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
          <OurVision bgColor='bg-gray-800' title='Our Vision' description='The vision of the Mechatronics Engineering Department is to become a world-renowned center of excellence in mechatronics education, research, and innovation.' />
          <OurVision bgColor='bg-red-500' title='Our Mission' description='The mission of the Mechatronics Engineering Department is to provide students with a comprehensive education in the principles and applications of mechatronics engineering.' />
          <OurVision bgColor='bg-gray-800' title='Our Motto' description='The motto of the Mechatronics Engineering Department is "Innovate, Create, and Transform."' />
        </Box>
        <Box className="md:px-10">
          <Box className='mb-8'>
            <Typography className='text-2xl mb-2 md:text-4xl font-bold' variant="h4" textAlign={"center"} color="initial">About Our Department</Typography>

          </Box>

          <Box className='grid grid-cols-1 md:grid-cols-2 mb-16'>
            <img className=' md:my-auto' src="/images/school.jpg" alt="" />
            <Box className='flex flex-col py-10 md:py-0 items-start justify-center space-y-5 px-10 bg-red-500 shadow-sm'>
              <Typography variant="h4" className='text-2xl text-center md:text-start md:text-5xl' gutterBottom color="#fff">
                Our Department
              </Typography>
              <Typography sx={{ lineHeight: '25px' }} variant="body1" color="#fff">
                Mechatronics Engineering Department is an interdisciplinary field that combines the principles of mechanical, electrical, and computer engineering to design and develop advanced systems and devices. By studying in this department, students are equipped with a diverse skill set that enables them to solve complex problems and create innovative solutions that bridge the gap between mechanical and electronic systems.
              </Typography>
              <Typography sx={{ lineHeight: '25px' }} variant="body1" color="#fff">
                One good thing about our department is that it offers a holistic approach to engineering education, giving students a broad understanding of different fields, which opens up various career opportunities. Graduates of Mechatronics Engineering Department can work in fields such as robotics, automation, automotive industry, aerospace, manufacturing, and many others, making it a highly sought-after degree in today's market.
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