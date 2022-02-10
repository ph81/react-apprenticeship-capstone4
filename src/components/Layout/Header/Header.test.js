import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header.component';

const renderNavbar = () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
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
