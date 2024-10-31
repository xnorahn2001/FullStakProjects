import React from 'react'

const Product = ({ Product }) => {
  return (
    <div>
      <li key={Product.Id}>
        <img src={Product.ImageUrl} alt="pro1 " />
        <h3>{Product.Name}</h3>
        <p>Prics: {Product.Price} SAR</p>
        <button>Show deatils</button>
      </li>
    </div>
  )
}

export default Product