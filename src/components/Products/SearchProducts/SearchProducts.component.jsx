import { useLocation } from 'react-router-dom';
import { useProductsContext } from '../../../context/ProductContext';
import Fuse from 'fuse.js';
import Error from '../../Error';
import ProductCard from '../ProductCard';
import { Section, ProductContainer } from '../../../GlobalStyles';

const SearchProducts = () => {
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get('q');
  const { products, products_error } = useProductsContext();

  if (products_error) {
    return <Error type="products" />;
  }

  const fuse = new Fuse(products, {
    keys: ['name', 'description', 'slugs'],
    includeScore: true,
  });
  //With fuse.js, a lower score means it's closer to an exact match
  const results = fuse.search(searchTerm);
  const productResults = results.filter((result) => result.score < 0.1);

  return (
    <Section>
      <h2>Search results</h2>
      <ProductContainer>
        {productResults.length === 0 ? (
          <h3>No products matching your search.</h3>
        ) : (
          productResults.map((product) => (
            <ProductCard key={product.item.id} {...product.item} />
          ))
        )}
      </ProductContainer>
    </Section>
  );
};

export default SearchProducts;
