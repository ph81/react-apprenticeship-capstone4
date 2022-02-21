import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  .mainImage {
    height: 600px;
    @media (max-width: 576px) {
      height: 30vh;
    }
    @media (min-width: 992px) {
      height: 600px;
    }
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  &:active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
`;

export const NextItems = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
  img {
    height: 100px;
    cursor: pointer;
    @media (max-width: 576px) {
      height: 50px;
    }
    @media (min-width: 992px) {
      height: 75px;
    }
  }
`;
