import React from 'react';
import { Link } from 'react-router-dom';
import { useCategories } from '../../utils/hooks/useCategories';
import Loading from '../Loading';
import { Section } from '../../GlobalStyles';
import {
  CategoriesContainer,
  Category,
  CategoryImg,
} from './Categories.styles';

const Categories = () => {
  const { data: categoriesData, isCategoriesLoading } = useCategories();
  const { results: categories } = categoriesData;

  if (isCategoriesLoading) {
    return <Loading />;
  }
  return (
    <Section>
      <h1>Departments</h1>
      <CategoriesContainer>
        {categories.map((category) => (
          <Category key={category.id}>
            <Link to={`/products?category=${category.slugs[0]}`}>
              <CategoryImg
                src={category.data.main_image.url}
                alt={category.data.name}
              />
            </Link>
            <p>{category.data.name}</p>
          </Category>
        ))}
      </CategoriesContainer>
    </Section>
  );
};

export default Categories;
