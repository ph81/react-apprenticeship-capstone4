import React from 'react';
import ProductCard from '../Products/ProductCard';
import mockFtProducts from '../../mocks/en-us/featured-products.json';
import { Section, ProductContainer } from '../../GlobalStyles';
import { ViewProductsBtn } from './FeaturedProducts.styles';

const FeaturedProducts = () => {
  const ftProducts = mockFtProducts.results;

  return (
    <Section>
      <h1>New collection</h1>
      <ProductContainer>
        {ftProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductContainer>
      <ViewProductsBtn>View all products</ViewProductsBtn>
    </Section>
  );
};

export default FeaturedProducts;
