import React from 'react';
import Routes from './utils/routes';
import { ProductsProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <ProductsProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
    </ProductsProvider>
  );
};

export default App;
