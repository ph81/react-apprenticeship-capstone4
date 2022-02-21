import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { CartProvider } from '../../../context/CartContext';
import { ProductsProvider } from '../../../context/ProductContext';
import Header from './Header.component';

const renderNavbar = () => {
  render(
    <ProductsProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </CartProvider>
    </ProductsProvider>
  );
};

describe('Renders Header', () => {
  it('must display a navbar and the Ecommerce store name', () => {
    renderNavbar();
    const navElement = screen.getByRole('navigation');
    const storeTitle = screen.getByText(/nakama/i);
    expect(navElement).toBeInTheDocument();
    expect(storeTitle).toBeInTheDocument();
  });
});
