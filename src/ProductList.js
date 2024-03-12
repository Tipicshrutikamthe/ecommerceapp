// import React from 'react';
import Product from './Product';

const ProductList = ({ products, onAddToCart, onPurchase }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} onPurchase={onPurchase} />
      ))}
    </div>
  );
};
export default ProductList