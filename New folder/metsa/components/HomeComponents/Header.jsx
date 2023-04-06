import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import Stack from '@mui/material/Stack'
import { Avatar, Box, Button, Link, Paper } from '@mui/material'
import Appbar from '../Appbar';
import TemporaryDrawer from '../Drawer';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

})

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <AppBar className='hidden md:block' position="sticky" sx={{ backgroundColor: "#fff", padding: "0 1rem" }}>
        <StyledToolbar>
          <Link href='/'><Image src="/images/metsa.png" width={150} height={70} alt="" /></Link>
          <Stack direction={"row"} spacing={3}  >
            <Link underline='none' href="/" className='navLink hover:border-b-2 hover:border-red-600' >Home</Link>
            <Link underline='none' href="/lecturers" className='navLink hover:border-b-2 hover:border-red-600'>Lecturers</Link>
            <Link underline='none' href="/executives" className='navLink hover:border-b-2 hover:border-red-600'>Executives</Link>
            <Link underline='none' href="/department" className='navLink hover:border-b-2 hover:border-red-600'>Department</Link>
            <Link underline='none' href="/contact" className='navLink hover:border-b-2 hover:border-red-600'>Contact</Link>
          </Stack>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, }}>

            <Link href="/department"><Button className='bg-gray-700 hover:bg-gray-900' variant="contained" size='small'>Let's Go In</Button></Link>

          </Box>

        </StyledToolbar>
      </AppBar>

      <Appbar isOpened={setIsOpen} />
      <TemporaryDrawer isOpened={isOpen} setIsOpened={setIsOpen} />

    </>
  )
}

export default Header