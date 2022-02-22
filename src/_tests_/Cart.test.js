import { render, screen, cleanup } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { BrowserRouter } from 'react-router-dom';
import * as ref from '../mocks/ref.json';
import * as products from '../mocks/en-us/products.json';
import { API_BASE_URL } from '../utils/constants';
import { ProductsProvider } from '../context/ProductContext';
import { CartProvider } from '../context/CartContext';
import Cart from '../pages/Cart';

const handlers = [
  // useLatestAPI mock
  rest.get(`${API_BASE_URL}`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(ref))
  ),

  // products mock
  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(products))
  ),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const renderCart = () => {
  render(
    <ProductsProvider>
      <CartProvider>
        <BrowserRouter>
          <Cart />
        </BrowserRouter>
      </CartProvider>
    </ProductsProvider>
  );
};

describe('Renders Shopping Cart', () => {
  afterAll(() => {
    cleanup();
  });

  test(`Validate message displayed when there are no items in the cart`, async () => {
    renderCart();

    const text = await screen.findByText('Your cart is empty');
    expect(text).toBeInTheDocument();
  });
});
