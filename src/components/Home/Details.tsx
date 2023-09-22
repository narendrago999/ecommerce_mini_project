import React from 'react'
import SelectSmall from '../Category Dropdown/SelectSmall'
import ProductDetails from './ProductDetails'

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