import React from 'react'
import SelectSmall from '../Category Dropdown/SelectSmall'
import ProductDetails from './ProductDetails'

const Details:React.FC = () => {
  return (
    <div className="details">
      <div className="category">
        <SelectSmall />
      </div>
        <div className="productDetails">
            <ProductDetails />
        </div>
    </div>
  )
}

export default Details