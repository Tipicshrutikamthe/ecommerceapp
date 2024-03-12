// Product.js
import React from 'react';

const Product = ({ product, onAddToCart, onPurchase }) => {
    // const handleAddToCart = () => {
    //     onAddToCart(product);
    //     onShowCart(); // Call the onShowCart function when adding to cart
    //   };
  return (
    <div className="product">
      {/* <img src={`images/${product.image}`} alt={product.name} /> */}
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product) }>Add to Cart</button>
      <button onClick={() => onPurchase(product)}>Purchase Now</button>
    </div>
    
       
      );
    };
 


export default Product


