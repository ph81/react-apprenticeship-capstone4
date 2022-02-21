import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import Loading from '../Loading';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { StyledBanners, SwiperImg } from './FeaturedContent.styles';

const FeaturedContent = () => {
  const { data: bannersData, isLoading } = useFeaturedBanners();
  const { results: banners } = bannersData;

  if (isLoading) {
    return <Loading />;
  }

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
