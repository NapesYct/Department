import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Link from 'next/link';


const HeroBackground = styled(Box)({
  backgroundImage: "url('/images/home-slide-2.jpg')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  // marginBottom: "3rem"
})


const HeroSection = () => {

  // const { isLogin } = useSelector((state: CounterState) => state.counter);
  return (
    <div>
      <HeroBackground className='mb-16'>
        <Box className='flex flex-col space-y-3 items-center md:items-start justify-center md:ml-12 bg-red-600 sm:bg-inherit gap-2' width={"50%"} sx={{
          height: "550px"
        }}>
          <Typography className="text-center text-xl md:text-5xl md:text-start" variant="h3" color="white">Welcome To Mechatronics Engineering Department YabaTech Chapter</Typography>
          <Typography className="text-center text-sm md:text-lg md:text-start" variant="subtitle1" color="white">Welcome To Mechatronics Department YabaTech Chapter</Typography>

          <Link href="/department"><Button className='bg-white text-black hover:bg-black hover:text-white md:bg-red-500' variant='contained' color='warning'>Let's Explore</Button></Link>

        </Box>
      </HeroBackground>

    </div >
  )
}

export default HeroSection