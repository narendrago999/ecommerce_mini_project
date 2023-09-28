import React, { useEffect } from 'react'
import Cart from './Cart'
import PriceTable from './PriceTable'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { useApi } from '../../Context/ApiContext'
import Cookies from 'js-cookie'
import Spinner from '../../SpinnerProgress/Spinner'

const CartDisplay = () => {
const Navigate = useNavigate()
  
const {getdata,deleteResponse, error,loading ,fetchData,deleteData} = useApi()
useEffect(() => {
  const token = Cookies.get('auth_token')
  console.log("cart token",token);
  fetchData(`${process.env.REACT_APP_BACKEND_URL}get-cart`,token)
}, []);
if (loading) {
  return <Spinner/>;
}
if (error) {
  return <Spinner/>;
}
  return (
    <>
    <div className="cart-main">
      <h2 className='cardpagetitle'>Cart Items</h2>
      <div className="cartbox">
    <div className="cartprice">
      {getdata.length>0?getdata.map((data:any)=>
    <Cart data={data} deleteData={deleteData} deleteResponse={deleteResponse}/>
      ):<div style={{width:'38vmax', textAlign:'center',margin:40}}>Empty Cart</div>
    }
    </div>
    <div className="pricedetails">
      <PriceTable data={getdata} />
    </div>
      </div>
    <div className="buttoncover">
      <Link to={"/order-place"} >
    <button className='orderbutton'>Place Order</button>
      </Link>
    </div>
    </div>
    </>
  )
}

export default CartDisplay