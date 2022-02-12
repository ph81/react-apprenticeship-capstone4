import React from 'react';
import { Link } from 'react-router-dom';
import mockCategories from '../../mocks/en-us/product-categories.json';
import { Section } from '../../GlobalStyles';
import {
  CategoriesContainer,
  Category,
  CategoryImg,
} from './Categories.styles';

const Categories = () => {
  const categories = mockCategories.results;

  return (
    <Section>
      <h1>Departments</h1>
      <CategoriesContainer>
        {categories.map((category) => (
          <Category key={category.id}>
            <Link to={`/products?category=${category.data.name}`}>
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
