import { render, screen, cleanup } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { BrowserRouter } from 'react-router-dom';
import * as ref from '../mocks/ref.json';
import * as product from '../mocks/en-us/product.json';
import { API_BASE_URL } from '../utils/constants';
import { ProductsProvider } from '../context/ProductContext';
import { CartProvider } from '../context/CartContext';
import SingleProduct from '../pages/SingleProduct';

const handlers = [
  // useLatestAPI mock
  rest.get(`${API_BASE_URL}`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(ref))
  ),

  // product mock
  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(product))
  ),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const renderSingleProduct = () => {
  render(
    <ProductsProvider>
      <CartProvider>
        <BrowserRouter>
          <SingleProduct />
        </BrowserRouter>
      </CartProvider>
    </ProductsProvider>
  );
};

describe('Renders Product detail', () => {
  afterAll(() => {
    cleanup();
  });

  it('Product Detail Page is fetching and rendering data from the API', async () => {
    renderSingleProduct();
    const text = await screen.findByText('Tallulah Sofa Gray');
    expect(text).toBeInTheDocument();
  });

  it('Product Detail Page contains the following info: price, sku, category and description', async () => {
    renderSingleProduct();
    const price = await screen.findByText('$1834.57');
    const sku = await screen.findByText('1080681271');
    const category = await screen.findByText('furniture');
    const desc = await screen.findByText(
      'A low profile sets the stage for nighttime relaxation. The Tallulah upholstered sofa combines the straight lines of the European style with romantic details such as side cushions, crooked legs and nail heads. Square arm.'
    );
    expect(price).toBeInTheDocument();
    expect(sku).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
  });

  it('Product detail contains a quantity and add to cart button', async () => {
    renderSingleProduct();
    const txtButton = await screen.findByText('Add to cart');
    expect(txtButton).toBeInTheDocument();
  });
});
