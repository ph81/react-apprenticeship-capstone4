import React, { useState } from 'react';
import ProductCard from '../ProductCard';
import mockProducts from '../../../mocks/en-us/products.json';
import mockCategories from '../../../mocks/en-us/product-categories.json';
import { usePagination } from '../../../utils/hooks/usePagination';
import {
  Section,
  ProductContainer,
  Pagination,
  Page,
} from '../../../GlobalStyles';
import {
  FilterContainer,
  FilterCategory,
  FilterItem,
} from './ProductList.styles';
const ProductList = () => {
  const products = mockProducts.results;
  const categories = mockCategories.results;
  //pagination
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 16,
    count: products.length,
  });

  // setting up filter logic
  const [filterArray, setFilterArray] = useState([]);

  const categoryFilter = (id) => {
    filterArray.includes(id)
      ? setFilterArray(filterArray.filter((x) => x !== id))
      : setFilterArray([...filterArray, id]);
  };

  if (!products) {
    return null;
  } // pull off the props from product

  return (
    <Section>
      <h1>Products</h1>
      <FilterContainer>
        <FilterCategory>
          {categories.map((category) => (
            <FilterItem key={category.id}>
              <label>
                <input
                  type="checkbox"
                  value={category.data.name}
                  onChange={() => categoryFilter(category.id)}
                />
                {category.data.name}
              </label>
            </FilterItem>
          ))}
          <FilterItem>
            <label>
              <input
                type="checkbox"
                value={''}
                onChange={() => categoryFilter('')}
              />
              Clear all filters
            </label>
          </FilterItem>
        </FilterCategory>
      </FilterContainer>

      <ProductContainer>
        {filterArray.length === 0
          ? products
              .map((product) => <ProductCard key={product.id} {...product} />)
              .slice(firstContentIndex, lastContentIndex)
          : products
              .filter((product) =>
                product.data.category.id.includes(filterArray)
              )
              .map((product) => <ProductCard key={product.id} {...product} />)
              .slice(firstContentIndex, lastContentIndex)}

        <Pagination>
          <Page onClick={prevPage}>&larr;</Page>
          {[...Array(totalPages).keys()].map((el) => (
            <Page
              onClick={() => setPage(el + 1)}
              key={el}
              className={`${page === el + 1 ? 'active' : ''}`}
            >
              {el + 1}
            </Page>
          ))}
          <Page
            onClick={nextPage}
            className={`${page === totalPages && 'disabled'}`}
          >
            &rarr;
          </Page>
        </Pagination>
      </ProductContainer>
    </Section>
  );
};

export default ProductList;
