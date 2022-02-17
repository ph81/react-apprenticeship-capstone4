import React from 'react';
import Routes from './utils/routes';
import { ProductsProvider } from './context/ProductContext';

const App = () => {
  return (
    <ProductsProvider>
      <Routes />
    </ProductsProvider>
  );
};

export default App;
