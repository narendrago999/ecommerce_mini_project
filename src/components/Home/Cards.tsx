import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SingleProduct from './SingleProduct';
import { color } from '@mui/system';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

export default function Cards(props: any) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

const handleAddToCart = (id:number) => {
    var token = Cookies.get('auth_token')
    props.postCartData(`${process.env.REACT_APP_BACKEND_URL}add-cart/${id}`,token,id)
  };

  return (
    <Card sx={{ width: 300, maxHeight:320,marginBottom:2}}>
       
      <CardMedia onClick={handleOpen}
        sx={{ height: 180,width:160,margin:'auto',marginTop:1,marginBottom:1}}
        image={props.product.product_image_url}
        title="green iguana"
      />
      <CardContent>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div className="singleproductdetails">
       <SingleProduct data={props.product}  postCartData={props.postCartData}/>
        </div>
      </Modal>
        <Typography gutterBottom variant="h5" component="div" sx={{fontSize:16,marginLeft:1}} onClick={handleOpen}>
          <div className="cardtitle">
          {props.product.product_title}<span style={{fontSize:'16px',fontWeight:'600'}}>{props.product.product_price}</span>
          </div>
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        <div className="cardbutton">
        <Link to={"/order-place"} >
        <Button size="small" sx={{color:'white', backgroundColor:'#19105b', '&:hover':{backgroundColor: 'pink', color:'black'}}}>Buy</Button>
  
      </Link>
        <Button onClick={()=>handleAddToCart(props.product.id)} size="small"  sx={{color:'white',backgroundColor:'#19105b',margin:1, '&:hover':{backgroundColor: 'pink',color:'black'}}}>Add to Cart</Button>
        </div>
      </CardActions>
    </Card>
  );
}