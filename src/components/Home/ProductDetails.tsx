import React, { useEffect } from 'react'
import Cards from './Cards'
import '../../assets/css/card.css'
import { useApi } from '../../Context/ApiContext'
import Cookies from 'js-cookie'
import Spinner from '../../SpinnerProgress/Spinner'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const ProductDetails = () => {
  const Navigate = useNavigate()
  const {data,getdata, loading,postCartData, error, fetchData} = useApi()
 console.log("data",data);
 
  
  useEffect(() => {
    const auth_token:string | undefined = Cookies.get('auth_token')
    console.log("token-suth", auth_token);
    
    fetchData(`${process.env.REACT_APP_BACKEND_URL}get-products`,auth_token);
  
     
  }, []);
  useEffect(() => {
    console.log("message",data.message);
    
    if(data.message === "success"){
      toast.success('Added To Cart', {
        position: 'bottom-right', 
        autoClose: 1000, 
      });
      
      setTimeout(()=>{
        Navigate('/cart')
        window.location.reload()
        },600)
      
    }
    if(data.message === "Token Not Found"){
      toast.success('SigIn First', {
        position: 'bottom-right', 
        autoClose: 1000, 
      });
      
      setTimeout(()=>{
        Navigate('/signin')
        window.location.reload()
        },800)
      
    }
    if(data.message === "already added"){
      toast.success('Already In Cart', {
        position: 'bottom-right', 
        autoClose: 1000, 
      });
      setTimeout(()=>{
        window.location.reload()
        },600)
     
    }
  
     
  }, [postCartData]);
 
  
  if (loading) {
    return <Spinner/>;
  }
  
  if (error) {
    return <Spinner/>;
  }
  

  return (
    <>
    <div className="cards">
    <ToastContainer />
      {getdata.map((product: any)=>
    <Cards product = {product} postCartData={postCartData} />
      )}
   
    </div>
    </>
  )
}

export default ProductDetails