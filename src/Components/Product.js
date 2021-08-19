import React from 'react';
import '../App.css';

function Product(props) {
  return(
    <div className="product" onClick={() => {props.addToCart(props.type)}}>
      <p>Click me to buy a {props.type}!</p>
      <p>${props.price}</p>
    </div>
  );
}

export default Product;
