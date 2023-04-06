import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Typography from '@mui/material/Typography';





const Footer = () => {
  return (
    <div>
      <div className='flex flex-wrap md:justify-between mt-12 md:items-center bg-red-500 py-2 px-10'>
        <Typography variant="subtitle1" color="#fff">Get connected with us on social networks</Typography>
        <div className='space-x-5'>
          <FacebookIcon className="text-white" />
          <TwitterIcon className="text-white" />
          <InstagramIcon className="text-white" />
          <YouTubeIcon className="text-white" />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40 bg-gray-900 py-16 pl-10'>
        <div className='flex flex-col justify-center space-y-4'>
          <Typography variant="h5" color="#fff">Our Contact</Typography>
          <div className='flex items-center space-x-2'>

            <div><LocationOnIcon className='text-white' /></div>
            <Typography variant="subtitle1" color="#fff">123, Herbert Macaulay Way, Yaba, Lagos</Typography>

          </div>
          <div className='flex items-center space-x-2'>
            <div><CallIcon className='text-white' /></div>
            <Typography variant="subtitle1" color="#fff">+234 905 878 4051</Typography>
          </div>

          <div className='flex items-center space-x-2'>
            <div><MarkunreadIcon className='text-white' /></div>
            <Typography variant="subtitle1" color="#fff">metsayct@gmail.com</Typography>
          </div>
        </div>

        <div>
          <Typography variant="h5" color="#fff">About Our Department</Typography>
          <Typography width={"70%"} variant="subtitle1" color="#fff">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore sequi recusandae sunt cum aspernatur ea beatae deserunt impedit blanditiis quibusdam.</Typography>
        </div>
      </div>
      <div className=' flex px-10 py-2 justify-between items-center bg-red-900'>
        <p className='text-white'> &#169;2022 Copyright Mechatronics Engineering Department</p>
        <p className='text-white'>Developed By Faleye Caleb</p>
      </div>
    </div>
  )
}

export default Footer