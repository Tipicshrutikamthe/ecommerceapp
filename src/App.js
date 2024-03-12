import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import SearchBar from './SearchBar';

import './App.css'; // You may need to import or create a CSS file for styling

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    // Fetch products from the JSON file
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };

  const addToCart = (product) => {
    setCart([...cart, product]);
    // Display an alert when a product is added to the cart
    alert(`Product "${product.name}" added to cart!`);
  };

  const purchase = (product) => {
    // Handle purchase logic
    console.log('Product purchased:', product);
  };

  const searchProducts = (term) => {
    setSearchTerm(term);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowCart = () => {
    setShowCart(true);
  };

  return (
    <div className="app">
      <SearchBar onSearch={searchProducts} />
      <ProductList products={filteredProducts} onAddToCart={addToCart} onPurchase={purchase} />
      <Cart cart={cart} />

    </div>
  );
};

export default App;
