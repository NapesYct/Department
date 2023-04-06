import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SchoolIcon from '@mui/icons-material/School';
import Groups2Icon from '@mui/icons-material/Groups2';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import Link from 'next/link';
import Image from 'next/image';

// type Anchor = 'top' | 'left' | 'bottom' | 'right';


// interface Props {
//   text: string
//   icon: any
// }

const ListItems = ({ text, icon }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  )
}

export default function TemporaryDrawer({ isOpened, setIsOpened }) {

  const toggleDrawer =
    (anchor, open) =>
      (event) => {
        if (
          event.type === 'keydown' &&
          ((event).key === 'Tab' ||
            (event).key === 'Shift')
        ) {
          return;
        }

        setIsOpened(false)
      };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box className='bg-red-500 py-10 '>
        <Image src={"/images/metsa.png"} className='mx-auto' width={140} height={70} alt="" />
      </Box>

      <List>
        <Link href='/'><ListItems text="Home" icon={<HomeIcon />} /></Link>
        <Link href='/lecturers'><ListItems text="Lecturers" icon={<SchoolIcon />} /></Link>
        <Link href='/executives'><ListItems text="Executives" icon={<Groups2Icon />} /></Link>
        <Link href='/department'><ListItems text="Department" icon={<MapsHomeWorkIcon />} /></Link>
        <Link href='/contact'><ListItems text="Contact" icon={<FmdGoodIcon />} /></Link>

      </List>

    </Box>
  );

  return (
    <div>
      <Drawer
        anchor={"left"}
        open={isOpened}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}