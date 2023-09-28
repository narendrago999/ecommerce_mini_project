import React from 'react'
import "../../assets/css/SingleProduct.css"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import DetailsTable from './DetailsTable';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const SingleProduct = (props:any) => {

    const handleAddToCart = (id:number) => {
        var token = Cookies.get('auth_token')
        props.postCartData(`${process.env.REACT_APP_BACKEND_URL}add-cart/${id}`,token,id)
      };


  return (
    <>
    <div className="singleproducts">
        <div className="image">
            <img src={props.data.product_image_url} alt="Image Not Found" />
        </div>
        <div className="details">
            <div className="title">
                <h2>T-shirt</h2>
            </div>
            <div className="rating">
            <Stack spacing={1}>
                {/* <Rating name="half-rating" defaultValue={props.data.product_rating} precision={0.5} /> */}
                <Rating name="half-rating-read" defaultValue={props.data.product_rating} precision={0.5} readOnly />
            </Stack>
            </div>
            <div className="price">
                <p>Rs. {props.data.product_price}</p>
            </div>
            <div className="offers">
                <div className="offer">
                <b>Bank Offer</b>
                <p>Upto ₹500.00 discount on SBI Credit CardsUpto ₹500.00 discount on SBI Cr…</p>
                </div>
                <div className="offer">
                <b>Partner Offer</b>
                <p>Upto ₹500.00 discount on SBI Credit CardsUpto ₹500.00 discount on SBI Cr…</p>
                </div>
            </div>
            <div className="detailTable">
                <DetailsTable  data = {props.data}/>
            </div>
            <div className="description">
                <h3>About this Product</h3>
                <ul>
                    <li>{props.data.product_description}</li>
                </ul>
            </div>
            <div className="button">
            <Link to={"/order-place"} >
                <button>Buy</button>
      </Link>
                <button onClick={()=>handleAddToCart(props.data.id)}>Add to Cart</button>
            </div>


        </div>
    </div>
    </>
  )
}

export default SingleProduct