import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Link from 'next/link';
import Image from 'next/image';

export default function MenuAppBar({ isOpened }) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const openDrawer = () => {
    isOpened(true)
  };

  return (
    <Box className="md:hidden" sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: 'white', position: 'sticky', top: 0 }}>
        <Toolbar className='flex justify-between items-center '>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            onClick={openDrawer}
            sx={{ mr: 2, color: 'red' }}
          >
            <MenuIcon />
          </IconButton>
          <Link href='/'><Image src="/images/metsa.png" width={100} height={70} alt="" /></Link>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="default"
                sx={{ color: "red" }}
              >
                <AccountCircle />
              </IconButton>


            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}