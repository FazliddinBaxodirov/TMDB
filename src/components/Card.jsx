import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SaveAltIcon from '@mui/icons-material/SaveAlt';


export default function CardList({title,text,image}) {
  return (
    <Card sx={{ maxWidth: 345 }} className='!w-[400px] h-[450px] relative p-[20px] !shadow-2xl !shadow-blue-400 '>
      <CardMedia
        component="img"
        alt="green iguana"
        className='!w-full !h-[60%] rounded-md'
        image={image}
      />
      <CardContent>
        <Typography className='line-clamp-1' gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography className='line-clamp-3' variant="body2" sx={{ color: 'text.secondary' }}>
          {text}
        </Typography>
      </CardContent>
      <CardActions className='absolute bottom-0 left-[70px] space-x-[50px]'>
        <Button startIcon={<FavoriteBorderIcon/>} size="small">Like</Button>
        <Button startIcon={<SaveAltIcon/>} size="small">Save</Button>
      </CardActions>
    </Card>
  );
}