import React from 'react';
import Rating from './Rating';

function ProductItem({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="50px" />
      <p>{product.category}</p>
      <p>{product.price}</p>
      <Rating rating={product.rating} numReviews={product.numReviews} />
    </div>
  );
}

export default ProductItem;
