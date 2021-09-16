import React from 'react';
import Rating from './Rating';

function ProductItem({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.category}</p>
      <p>{product.price}</p>
      <Rating rating={product.rating} />
    </div>
  );
}

export default ProductItem;
