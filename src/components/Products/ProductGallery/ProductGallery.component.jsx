import React, { useState } from 'react';
import { GalleryWrapper, NextItems } from './ProductGallery.styles';

const ProductGallery = ({ images, alt }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <GalleryWrapper>
      <img src={main.image.url} alt={alt} className="mainImage" />
      <NextItems>
        {images.map((item, index) => (
          <img
            src={item.image.url}
            alt={alt}
            key={index}
            onClick={() => setMain(images[index])}
            className={`${item.image.url === main.url ? 'active' : null}`}
          />
        ))}
      </NextItems>
    </GalleryWrapper>
  );
};

export default ProductGallery;
