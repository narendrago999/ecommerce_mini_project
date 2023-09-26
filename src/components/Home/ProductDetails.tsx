import React, { useEffect } from 'react'
import Cards from './Cards'
import '../../assets/css/card.css'
import { useApi } from '../../Context/ApiContext'
import Cookies from 'js-cookie'
import Spinner from '../../SpinnerProgress/Spinner'
const ProductDetails = () => {
  const {getdata, loading, error, fetchData} = useApi()
 
  
  useEffect(() => {
    const auth_token:string | undefined = Cookies.get('auth_token')
    console.log("token-suth", auth_token);
    
    fetchData('http://localhost:8080/get-products',auth_token);
    
  }, []);
  console.log("data",getdata);
  console.log("loading",loading);
  console.log("error",error);
  
  if (loading) {
    return <Spinner/>;
  }
  
  if (error) {
    return <Spinner/>;
  }
  

  return (
    <>
    <div className="cards">
      {getdata.map((product: any)=>
    <Cards product = {product} />
      )}
   
    </div>
    </>
  )
}

export default ProductDetails