import React from 'react';
import mockData from '../../mocks/en-us/featured-banners.json';
import { StyledBanners, SwiperImg } from './FeaturedContent.styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';

const FeaturedContent = () => {
  const banners = mockData.results;

  return (
    <StyledBanners>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <SwiperImg
              src={banner.data.main_image.url}
              alt={banner.data.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledBanners>
  );
};

export default FeaturedContent;
