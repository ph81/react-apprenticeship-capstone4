import React from 'react';
import ProductCard from '../Products/ProductCard';
import mockFtProducts from '../../mocks/en-us/featured-products.json';
import { Link } from 'react-router-dom';
import { Section, ProductContainer } from '../../GlobalStyles';
import { ViewProductsBtn } from './FeaturedProducts.styles';

const FeaturedProducts = () => {
  const ftProducts = mockFtProducts.results;

  return (
    <Section id="newcollection">
      <h1>New collection</h1>
      <ProductContainer>
        {ftProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductContainer>
      <ViewProductsBtn>
        <Link to="/products">View all products</Link>
      </ViewProductsBtn>
    </Section>
  );
};

export default FeaturedProducts;
