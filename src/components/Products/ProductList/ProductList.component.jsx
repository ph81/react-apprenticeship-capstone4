import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../ProductCard';
import { useProductsContext } from '../../../context/ProductContext';
import Loading from '../../Loading';
import Error from '../../Error';
import { useCategories } from '../../../utils/hooks/useCategories';
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
  const { products, isLoading } = useProductsContext();
  const { data: categoriesData, isCategoriesLoading } = useCategories();
  const { results: categories } = categoriesData;

  const byCategory = useLocation().search;
  const slugCategory = new URLSearchParams(byCategory).get('category');

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
    contentPerPage: 12,
    count: products.length,
  });

  // setting up filter logic
  const [filterArray, setFilterArray] = useState([]);

  useEffect(() => {
    if (slugCategory !== '') {
      setFilterArray([...filterArray, slugCategory]);
      console.log(filterArray);
    }
  }, []);

  const categoryFilter = (id) => {
    filterArray.includes(id)
      ? setFilterArray(filterArray.filter((x) => x !== id))
      : //setFilterArray(filterArray.push(id));
        setFilterArray(...filterArray, id);
    console.log(filterArray);
    const filtered = products.filter((product) =>
      product.data.category.slug.includes(filterArray)
    );
    console.log(filterArray, filtered);
  };

  if (isCategoriesLoading) {
    return <Loading />;
  }

  if (!categories && !isCategoriesLoading) {
    return <Error type="categories" />;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (!products && !isLoading) {
    return <Error type="products" />;
  }

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
                  value={category.slugs[0]}
                  onChange={() => categoryFilter(category.slugs[0])}
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
                product.data.category.slug.includes(filterArray)
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
