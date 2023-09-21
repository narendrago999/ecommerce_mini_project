import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards() {
  return (
    <Card sx={{ maxWidth: 255, maxHeight:380, margin:5}}>
      <CardMedia
        sx={{ height: 180, }}
        image="https://th.bing.com/th/id/OIP.BSVbAWhbtvrl5QmMgRUKoQHaHa?pid=ImgDet&rs=1"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Denim Shirt<span style={{fontSize:'16px',marginLeft:'55px',fontWeight:'600'}}>$260</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}