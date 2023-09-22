import React from 'react'
import SearchAppBar from '../../layout/HeaderBar/SearchAppBar/SearchAppBar'
import Details from './Details'
import Slider from './Slider'
import SecondHeader from '../../layout/HeaderBar/SecondHeader/SecondHeader'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import Cart from './Cart'
import PriceTable from './PriceTable'
const Home:React.FC = () => {
  return (
    <>
    <div className="home">
    <SearchAppBar />
    <div className="slider">
      <SecondHeader />
    </div>
    {window.location.pathname==='/cart'?
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
    :<></>}
    {window.location.pathname==='/'?<><Slider /><Details /></>:<></>}
    {window.location.pathname==='/signup'?<SignUp />:<></>}
    {window.location.pathname==='/signin'?<SignIn />:<></>}
    
    
    </div>
    </>
  )
}

export default Home