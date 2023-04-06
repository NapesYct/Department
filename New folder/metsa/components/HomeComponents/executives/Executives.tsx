import { Box, Typography } from '@mui/material'
import Link from 'next/link';
import React from 'react'
import { urlFor } from '../../../sanity';
import { OurExecutives } from '../../../typings';
import ExecutivesCard from './ExecutivesCard';

interface Props {
  allExecutives: [OurExecutives]
}

const Executives: React.FC<Props> = ({ allExecutives }) => {
  return (
    <Box className='mb-16 md:px-10'>
      <Box className='flex justify-between items-center' sx={{ margin: "1rem 0", }}>
        <Box>
          <Typography className="text-center md:text-start" variant="h5" color="initial">Meet Your Departmental Executives</Typography>
          <Typography className="text-center md:text-start" variant="subtitle1" color="initial">Discove all the executives in the department of mechatronics engineering</Typography>
        </Box>
        <Link href="/executives"><Typography className='hidden md:block transition duration-200 delay-75 ease-in-out hover:underline hover:text-red-500' variant="subtitle2" color="initial">See All &gt;&gt;&gt;</Typography></Link>
      </Box>
      <Box className='grid grid-cols-1 lg:grid-cols-4 bg-red-100 md:py-8 sm:grid-cols-2 gap-5 p-4 md:p-8'>

        {
          allExecutives.map((executives) => {
            return <div key={executives._id}>
              <ExecutivesCard name={executives.name} title={executives.title} mainImage={urlFor(executives.mainImage).url()} />
            </div>
          })
        }
        <Link href="/executives"><Typography className='md:hidden text-center bg-red-500 p-2 rounded mx-auto transition duration-200 delay-75 ease-in-out hover:underline hover:text-red-500' variant="subtitle2" color="#fff">See All &gt;&gt;&gt;</Typography></Link>

        {/* <ExecutivesCard />
        <ExecutivesCard />
        <ExecutivesCard /> */}
      </Box>
    </Box>
  )
}

export default Executives