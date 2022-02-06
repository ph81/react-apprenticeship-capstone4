import styled from 'styled-components';

export const StyledBanners = styled.section`
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const SwiperSlide = styled.div`
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`;

export const SwiperImg = styled.img`
  display: block;
  width: 100vw;
  height: 90vh;
  object-fit: cover;
  @media all and (max-width: 480px) {
    display: block;
    width: 100vw;
    height: 40vh;
    object-fit: cover;
  }
`;
