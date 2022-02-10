import React from 'react';
import { Link } from 'react-router-dom';
import { Item, Name, Photo, Price, Slug } from './ProductCard.styles';

const ProductCard = (item) => {
  const product = {
    id: item.id,
    image_url: item.data.main_image.url,
    name: item.data.name,
    price: item.data.price,
    slug: item.data.category.slug,
  };
  return (
    <Item key={product.id}>
      <Photo>
        <Link to={`/products/${product.id}`}>
          <img src={product.image_url} alt={product.name} />
        </Link>
      </Photo>
      <Slug>{product.slug}</Slug>
      <Name>{product.name}</Name>
      <Price>${product.price}</Price>
    </Item>
  );
};

export default ProductCard;
