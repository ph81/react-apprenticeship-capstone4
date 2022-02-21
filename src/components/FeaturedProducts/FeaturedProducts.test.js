import { render } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../../context/CartContext';
import FeaturedProducts from './FeaturedProducts.component';
import * as ref from '../../mocks/ref.json';
import * as ftproducts from '../../mocks/en-us/featured-products.json';
import { API_BASE_URL } from '../../utils/constants';

const handlers = [
  // useLatestAPI mock
  rest.get(`${API_BASE_URL}`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(ref))
  ),

  // categories mock
  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(ftproducts))
  ),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Featured Products', () => {
  test('Featured Products section is fetching data from api', async () => {
    const { findByText, findByAltText } = render(
      <CartProvider>
        <BrowserRouter>
          <FeaturedProducts />
        </BrowserRouter>
      </CartProvider>
    );

    expect(await findByText('Grayton Armchair')).toBeInTheDocument();
    expect(await findByAltText('Shay Armchair')).toBeInTheDocument();
  });
});
