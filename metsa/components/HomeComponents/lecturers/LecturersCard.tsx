import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';


interface Props {
  title: string
  subtitle: string
  description: string
  mainImage: string
  slug: string
}

const LecturersCard: React.FC<Props> = ({ title, subtitle, description, mainImage, slug }) => {
  return (
    <Card className="w-full h-full">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia
        className='w-full h-60'
        component="img"
        height=""
        image={mainImage}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions className='relative' disableSpacing sx={{
        justifyContent: "center"
      }}>
        <Link href={`/lecturers/${slug}`}>
          <Button startIcon={<PersonIcon />} className="bg-black bottom-0 text-white items-center flex hover:bg-red-500">
            View Pofile
          </Button>
        </Link>
      </CardActions>
    </Card>

  )
}

export default LecturersCard