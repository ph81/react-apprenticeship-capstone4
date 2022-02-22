import { render } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { BrowserRouter } from 'react-router-dom';
import Categories from '../../components/Categories';
import * as ref from '../../mocks/ref.json';
import * as categories from '../../mocks/en-us/product-categories.json';
import { API_BASE_URL } from '../../utils/constants';

const handlers = [
  // useLatestAPI mock
  rest.get(`${API_BASE_URL}`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(ref))
  ),

  // categories mock
  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(categories))
  ),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Rendering Categories', () => {
  test('Categories section is fetching data from api', async () => {
    const { findByText } = render(
      <BrowserRouter>
        <Categories />
      </BrowserRouter>
    );

    expect(await findByText('Bed & Bath')).toBeInTheDocument();
    expect(await findByText('Furniture')).toBeInTheDocument();
    expect(await findByText('Lighting')).toBeInTheDocument();
    expect(await findByText('Kitchen')).toBeInTheDocument();
    expect(await findByText('Decorate & Organize')).toBeInTheDocument();
  });
});
