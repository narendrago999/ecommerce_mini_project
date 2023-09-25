import React from 'react'
import Cart from './Cart'
import PriceTable from './PriceTable'

const CartDisplay:React.FC = () => {
  return (
    <>
    <div className="cart-main">
      <h2 className='cardpagetitle'>Cart Items</h2>
     
      <div className="cartbox">
    <div className="cartprice">
    <Cart />
    <Cart />
    <Cart />
    <Cart />
    </div>
    <div className="pricedetails">
      <PriceTable />
    </div>
      </div>
    <div className="buttoncover">
    <button className='orderbutton'>Place Order</button>
    </div>
    </div>
    </>
  )
}

export default CartDisplay