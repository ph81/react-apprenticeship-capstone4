import React from 'react';
import ProductCard from '../Products/ProductCard';
import { useFeaturedProducts } from '../../utils/hooks/useFeaturedProducts';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import Error from '../Error';
import { Section, ProductContainer } from '../../GlobalStyles';
import { ViewProductsBtn } from './FeaturedProducts.styles';

const FeaturedProducts = () => {
  const { data: ftProductsData, isLoading } = useFeaturedProducts();
  const { results: ftProducts } = ftProductsData;

  if (isLoading) {
    return <Loading />;
  } else if (!ftProducts) {
    return <Error />;
  }

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
