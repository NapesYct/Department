import Typography from '@mui/material/Typography';
import React from 'react';

interface Props {
  title: string,
  subtitle: string
}

const WhatWeOffer: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className='text-center mb-16 md:px-10'>
      <Typography variant="h4" color="initial">{title}</Typography>
      <Typography variant="subtitle1" color="initial">{subtitle}</Typography>

    </div>
  )
}

export default WhatWeOffer