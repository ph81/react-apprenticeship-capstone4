import { Link } from 'react-router-dom';
import AddtoCart from '../../Cart/AddtoCart';
import { Item, Name, Photo, Price, Slug } from './ProductCard.styles';

const ProductCard = (item) => {
  const product = {
    id: item.id,
    image_url: item.data.mainimage.url,
    name: item.data.name,
    price: item.data.price,
    slug: item.data.category.slug,
  };
  return (
    <Item key={product.id}>
      <Photo>
        <Link to={`/product/${product.id}`}>
          <img src={product.image_url} alt={product.name} />
        </Link>
      </Photo>
      <Slug>{product.slug}</Slug>
      <Name>{product.name}</Name>
      <Price>${product.price}</Price>
      <AddtoCart product={product} showQuantity={false} />
    </Item>
  );
};

export default ProductCard;
