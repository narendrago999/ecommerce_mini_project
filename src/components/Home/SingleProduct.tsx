import React from 'react'
import "../../assets/css/SingleProduct.css"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import DetailsTable from './DetailsTable';

const SingleProduct:React.FC = () => {
  return (
    <>
    <div className="singleproducts">
        <div className="image">
            <img src="https://m.media-amazon.com/images/I/91xVY0HUECS._UX679_.jpg" alt="Image Not Found" />
        </div>
        <div className="details">
            <div className="title">
                <h2>T-shirt</h2>
            </div>
            <div className="rating">
            <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
            </Stack>
            </div>
            <div className="price">
                <p>$200</p>
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
                <DetailsTable />
            </div>
            <div className="description">
                <h3>About this Product</h3>
                <ul>
                    <li>Care Instructions: Machine Wash</li>
                    <li>Fit Type: Regular Fit</li>
                    <li>Style Number - CB08</li>
                    <li>Regular Fit</li>
                    <li>Round Neck With Half Sleeves</li>
                    <li>Label Free For All Day Comfort</li>
                    <li>Washcare Instruction : Gentle wash 40 Degree, Do not bleach, Do not wring, Line dry in shade, Medium iron, Do not dry clean, Wash inside out with like colors. Do not iron on label/embroidery/print</li>
                </ul>
            </div>
            <div className="button">
                <button>Buy</button>
                <button>Add to Cart</button>
            </div>


        </div>
    </div>
    </>
  )
}

export default SingleProduct