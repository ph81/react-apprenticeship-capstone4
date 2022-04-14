import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useProductsContext } from '../../../context/ProductContext';
import { hasQueryParams } from '../../../utils/helpers';
import Sidebar from '../../Sidebar';
import ProductCard from '../ProductCard';
import Loading from '../../Loading';
import Error from '../../Error';
import {
  Section,
  ListContainer,
  ProductContainer,
} from '../../../GlobalStyles';

const ProductList = () => {
  const { products, isLoading } = useProductsContext();
  const [selectedCategory, setSelectedCategory] = useState([]);

  const byCategory = useLocation().search;
  const slugCategory = new URLSearchParams(byCategory).get('category');
  let productListing = [];

  useEffect(() => {
    console.log(slugCategory);
    if (slugCategory !== '') {
      setSelectedCategory([slugCategory]);
    }
  }, []);

  if (hasQueryParams(window.location.href)) {
    productListing = products.filter(
      (product) => selectedCategory.indexOf(product.data.category.slug) !== -1
    );
  } else {
    productListing = products;
  }

  if (isLoading) {
    return <Loading />;
  } else if (!products) {
    return <Error type="products" />;
  }

  return (
    <Section>
      <h1>Products</h1>
      <ListContainer>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </ListContainer>
      <ProductContainer>
        {selectedCategory.length > 0
          ? productListing
              .filter(
                (product) =>
                  selectedCategory.indexOf(product.data.category.slug) !== -1
              )
              .map((product) => <ProductCard key={product.id} {...product} />)
          : products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
      </ProductContainer>
    </Section>
  );
};

export default ProductList;
