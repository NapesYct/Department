import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import Stack from '@mui/material/Stack'
import { AppBar, Avatar, Box, Button, Link, Paper } from '@mui/material'
import Appbar from '../Appbar';
import TemporaryDrawer from '../Drawer';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

});

const linkStyle = {
  color: 'black',
  transition: 'all',
  transitionDuration: '200ms',
  transitionTimingFunction: 'ease-in-out',
  ":hover": {
    borderBottomWidth: '2px',
    borderBottomColor: 'red'
  }
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <AppBar style={{ backgroundColor: 'white', position: 'sticky' }} position="sticky" sx={{
        backgroundColor: "#ddd",
        position: 'sticky',
        padding: "0 1rem",
        display: {
          xs: 'none',
          sm: 'none',
          md: 'block',

        }
      }}>
        <StyledToolbar>
          <Link href='/'><Image src="/images/metsa.png" width={150} height={70} alt="" /></Link>
          <Stack direction={"row"} spacing={10} >
            <Link sx={linkStyle} underline='none' href="/"  >Home</Link>
            <Link sx={linkStyle} underline='none' href="/lecturers" >Lecturers</Link>
            <Link sx={linkStyle} underline='none' href="/executives">Executives</Link>
            <Link sx={linkStyle} underline='none' href="/department">Department</Link>
            <Link sx={linkStyle} underline='none' href="/contact">Contact</Link>
          </Stack>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, }}>

            <Link href="/department">
              <Box className='bg-gray-700 hover:bg-red-900'>
                <Button variant="contained" sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }} size='small'>Let's Go In</Button>
              </Box>
            </Link>

          </Box>

        </StyledToolbar>
      </AppBar>

      <Appbar isOpened={setIsOpen} />
      <TemporaryDrawer isOpened={isOpen} setIsOpened={setIsOpen} />

    </>
  )
}

export default Header