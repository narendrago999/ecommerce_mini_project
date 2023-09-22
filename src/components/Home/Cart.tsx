import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Button } from '@mui/base';
import { Link } from 'react-router-dom';
import "../../assets/css/Cart.css"
import DeleteIcon from '@mui/icons-material/Delete';

export default function Cart() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' ,width:755 , marginBottom:1}}>
      <Box sx={{ display: 'flex',justifyContent:'left',alignItems:'center',width:'100%' }}>
      <CardMedia
        component="img"
        sx={{ width: 70 ,height:150, margin:2}}
        image="https://rukminim2.flixcart.com/image/224/224/ky90scw0/mobile/s/5/d/-original-imagagnfgh6ed7tp.jpeg?q=90"
        alt="Live from space album cover"
      />
     
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        
          <div className="cartDetails">
            <h4>Real Me 9i</h4>
            <p>4 GB Ram </p>
            <p>$200</p>
            <Link to='/remove-cart'><button className='productremove'><DeleteIcon sx={{color:'black'}}/></button></Link>
          </div>
        </Box>
      </Box>
    </Card>
  );
}