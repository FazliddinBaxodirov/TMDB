import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import { useDispatch, useSelector } from 'react-redux';
import { IMG_URL } from '../hook/useEnv';
import { ACTIONS } from '../redux/actions';
import { toast } from 'react-hot-toast'; // Import toast

export default function CardList({ item }) {
  const dispatch = useDispatch();
  const [isLiked,setIsliked] = React.useState(false)
  const [isSaved,setIsSaved] = React.useState(false)
  function handleLike(item) {
    if(isLiked){
      toast.error(`${item.title} already liked!`)
    }
    else{
      toast.success(`${item.title} liked!`)
      setIsliked(true)
      dispatch({type:ACTIONS.add_like ,payload:item})
    }
  }
  function handleSave(item) {
    if(isSaved){
      toast.error(`${item.title} already saved!`)
    }
    else{
      toast.success(`${item.title} saved!`)
      setIsSaved(true)
      dispatch({type:ACTIONS.save ,payload:item})
    }
  }
  return (
    <Card sx={{ maxWidth: 345 }} className='!w-[400px] h-[450px] relative p-[20px] !shadow-2xl !shadow-blue-400 '>
      <CardMedia
        component="img"
        alt="Movie Poster"
        className='!w-full !h-[60%] rounded-md'
        image={`${IMG_URL}${item.poster_path}`}
      />
      <CardContent>
        <Typography className='line-clamp-1' gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography className='line-clamp-3' variant="body2" sx={{ color: 'text.secondary' }}>
          {item.overview}
        </Typography>
      </CardContent>
      <CardActions className='absolute bottom-0 left-[70px] space-x-[50px]'>
        <Button startIcon={isLiked?<FavoriteIcon/>:<FavoriteBorderIcon />} onClick={() => handleLike(item)} size="small">Like</Button>
        <Button startIcon={isSaved?<BeenhereIcon/> :<SaveAltIcon/>} onClick={() => handleSave(item)} size="small">Save</Button>
      </CardActions>
    </Card>
  );
}
