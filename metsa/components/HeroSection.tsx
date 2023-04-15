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
  // marginBottom: "3rem",
})


const HeroSection = () => {

  // const { isLogin } = useSelector((state: CounterState) => state.counter);
  return (
    <div>
      <HeroBackground className='mb-16'>
        <Box sx={{
          width: {
            sx: '100%',
            md: '50%'
          },
          height: "550px",
          display: 'flex',
          flexDirection: 'column',
          alignItems: {
            sm: 'center',

            md: 'flex-start'
          },
          justifyContent: 'center',
          marginLeft: {
            md: 12
          },
          backgroundColor: {
            xs: 'rgba(225, 0, 50, 0.8)',
            md: 'transparent'
          },
          paddingLeft: {
            xs: '2rem',
            md: '0'
          }
        }}>
          <Typography variant="h1" color="white" sx={{
            textAlign: {
              xs: 'start',
              md: 'start'
            },
            fontSize: {
              xs: '2.25rem',
              md: '3.5rem'
            },
            marginBottom: {
              xs: '1.5rem'
            }

          }}>Welcome To Mechatronics Engineering Department YabaTech Chapter</Typography>
          {/* <Typography className="text-center text-sm md:text-lg md:text-start" variant="subtitle1" color="white"
            sx={{
              textAlign: {
                xs: 'center',
                md: ''
              }
            }}
          >Welcome To Mechatronics Department YabaTech Chapter</Typography> */}

          <Link href="/department"><Button className='bg-white text-black hover:bg-black hover:text-white md:bg-red-500' variant='contained' color='warning'>Let's Explore</Button></Link>

        </Box>
      </HeroBackground>

    </div >
  )
}

export default HeroSection