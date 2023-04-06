import { Box, Typography } from '@mui/material'
import React from 'react'
import WhatWeOffer from '../../WhatWeOffer'
import LecturersCard from './LecturersCard';
import { LecturersData } from '../../../typings'
import { urlFor } from '../../../sanity';
import Link from 'next/link';

interface Props {
  lecturersInfo: [LecturersData]
}

const Lecturers: React.FC<Props> = ({ lecturersInfo }) => {

  return (
    <Box className='mb-16 '>
      <WhatWeOffer title={'What We Offer'} subtitle={'Join us to know all the courses in this wonderfull department so that you can have a wonderful and beautiful user experience Join us to know all the courses in this wonderfull department so that you can have a wonderful and beautiful user experience'} />
      <Box className='md:px-10 flex justify-between items-center' sx={{ margin: "1rem 0" }}>
        <Box>
          <Typography className="text-center md:text-start" variant="h5" color="initial">Meet Your Departmental Lecturers</Typography>
          <Typography className="text-center md:text-start" variant="subtitle1" color="initial">Discove all the lecturers in the department of mechatronics engineering</Typography>
        </Box>
        <Link href="/lecturers"><Typography className='hidden md:block transition duration-200 delay-75 ease-in-out hover:underline hover:text-red-500' variant="subtitle2" color="initial">See All &gt;&gt;&gt;</Typography></Link>
      </Box>
      <Box className='relative'>
        <Box className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-4 md:px-10' sx={{
          backgroundImage: "url('/images/dark.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "1.5rem",
          backgroundAttachment: "fixed"

        }}>
          {
            lecturersInfo.map((lec) => {
              return <div key={lec._id}>
                <LecturersCard title={lec.title} slug={lec.slug.current} subtitle={lec.subtitle} description={lec.description} mainImage={urlFor(lec.mainImage).url()} />
              </div>

            })
          }
          {/* <LecturersCard />
          <LecturersCard />
          <LecturersCard /> */}
          <Link href="/lecturers"><Typography className='md:hidden text-center bg-red-500 p-2 rounded mx-auto transition duration-200 delay-75 ease-in-out hover:underline hover:text-red-500' variant="subtitle2" color="#fff">See All &gt;&gt;&gt;</Typography></Link>
        </Box>

      </Box>

    </Box>
  )
}

export default Lecturers