import React,{useEffect} from 'react'
import ProductDetails from './ProductDetails'
import { useApi } from '../../Context/ApiContext'
import Spinner from '../../SpinnerProgress/Spinner'
import Cookies from 'js-cookie'

const Details:React.FC = () => {




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