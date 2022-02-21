import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useProductsContext } from '../../../context/ProductContext';
import { useCategories } from '../../../utils/hooks/useCategories';
import { usePagination } from '../../../utils/hooks/usePagination';
import { hasQueryParams } from '../../../utils/helpers';
import ProductCard from '../ProductCard';
import Loading from '../../Loading';
import Error from '../../Error';
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
  let productListing = [];

  // setting up filter logic
  const [filterArray, setFilterArray] = useState([]);

  useEffect(() => {
    if (slugCategory !== '') {
      setFilterArray([...filterArray, slugCategory]);
      console.log(filterArray);
    }
  }, []);

  if (hasQueryParams(window.location.href)) {
    productListing = products.filter((product) =>
      product.data.category.slug.includes(filterArray)
    );
  } else {
    productListing = products;
  }

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
    count: productListing.length,
  });

  const categoryFilter = (id) => {
    console.log(slugCategory);
    console.log(id);
    const res2 = filterArray.some((item) => item === id);
    console.log(res2);
    res2
      ? setFilterArray(filterArray.filter((x) => x !== id))
      : setFilterArray((prevArray) => [...prevArray, id]);
    console.log(filterArray);
  };

  if (isCategoriesLoading) {
    return <Loading />;
  } else if (!categories) {
    return <Error type="categories" />;
  }

  if (isLoading) {
    return <Loading />;
  } else if (!products) {
    return <Error type="products" />;
  }

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
        {productListing
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
