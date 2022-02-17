import React from 'react';
import { useParams } from 'react-router-dom';
import { useSingleProduct } from '../../../utils/hooks/useSingleProduct';
import Loading from '../../Loading';
import Error from '../../Error';
import ProductGallery from '../ProductGallery';
import {
  ProductWrapper,
  Detail,
  ColDetail,
  ProductContent,
  Title,
  Price,
  PurchaseInfo,
  ProductSpecs,
} from './ProductDetail.styles';

const ProductDetail = () => {
  const { id } = useParams();

  //fetching data
  const { data: singleProductData, isLoading } = useSingleProduct(id);
  const { results: product } = singleProductData;

  if (isLoading) {
    return <Loading />;
  }

  if (!product && !isLoading) {
    return <Error />;
  }

  if (!product) {
    return null;
  } // pull off the props from product

  return (
    <ProductWrapper>
      <Detail>
        <ColDetail>
          <ProductGallery
            images={product[0]?.data?.images}
            alt={product[0].data.name}
          />
        </ColDetail>
        <ColDetail>
          <ProductContent>
            <Title>{product[0].data.name}</Title>
            <Price>
              Price: <span>${product[0].data.price}</span>
            </Price>
            <PurchaseInfo>
              {product[0]?.data?.stock > 0 && <h3>add to cart</h3>}
            </PurchaseInfo>
            <ProductSpecs>
              <h3>About this item: </h3>
              <p>{product[0]?.data?.short_description}</p>
              <ul>
                <li>
                  Category:
                  <span>{product[0]?.data?.category.slug}</span>
                </li>
                <li>
                  SKU: <span>{product[0]?.data?.sku}</span>
                </li>
                <li>
                  Availability:
                  <span>
                    {product[0]?.data?.stock > 0 ? `In Stock` : 'out of stock'}
                  </span>
                </li>
              </ul>
            </ProductSpecs>
          </ProductContent>
        </ColDetail>
      </Detail>
    </ProductWrapper>
  );
};

export default ProductDetail;
