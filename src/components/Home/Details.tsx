import React,{useEffect} from 'react'
import ProductDetails from './ProductDetails'
import { useApi } from '../../Context/ApiContext'
import Spinner from '../../SpinnerProgress/Spinner'

const Details:React.FC = () => {


  const {data, loading, error, fetchData} = useApi()
useEffect(() => {
  // Make an API request when the component mounts
  fetchData('https://your-api-url.com/data',data);
}, []);

if (loading) {
  return <Spinner/>;
}

if (error) {
  return <Spinner/>;
}


  return (
    <div className="details">
        <div className="productDetails">
      <h1>Trendings</h1>
            <ProductDetails />
        </div>
    </div>
  )
}

export default Details