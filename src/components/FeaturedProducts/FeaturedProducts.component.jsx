import { useFeaturedProducts } from '../../utils/hooks/useFeaturedProducts';
import ProductCard from '../Products/ProductCard';
import Loading from '../Loading';
import Error from '../Error';
import { Section, ProductContainer } from '../../GlobalStyles';

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
    </Section>
  );
};

export default FeaturedProducts;
