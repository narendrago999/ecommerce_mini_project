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
import Cookies from 'js-cookie';

export default function Cart(props:any) {
  const theme = useTheme();

  React.useEffect(()=>{
    console.log(props.deleteResponse)
  })
console.log("props",props.data[0]);
async function handleDelete(id:any){
  const token = Cookies.get("auth_token")
  await props.deleteData(`http://localhost:8080/delete/${id}`,token)
  

}

  return (

    <>
     
      
        <Card sx={{ display: 'flex' ,width:755 , marginBottom:1}}>
      <Box sx={{ display: 'flex',justifyContent:'left',alignItems:'center',width:'100%' }}>
      <CardMedia
        component="img"
        sx={{ width: 70 ,height:150, marginLeft:10, marginRight:3}}
        image="https://rukminim2.flixcart.com/image/224/224/ky90scw0/mobile/s/5/d/-original-imagagnfgh6ed7tp.jpeg?q=90"
        alt="Live from space album cover"
      />
     
        <Box sx={{ display: 'flex', alignItems: 'center',width:'100%', pl: 1, pb: 1 }}>
        
          <div className="cartdetails">
            <h4>{props.data.product_title}</h4>
            <p>{props.data.product_price}</p>
            <p>{props.data.product_description}</p>
            
            <div className='productremove'><button onClick={()=>handleDelete(props.data.id)} ><DeleteIcon sx={{color:'black'}}/></button></div>
          </div>
        </Box>
      </Box>
    </Card>
      
     
      
    </>


    
  );
}