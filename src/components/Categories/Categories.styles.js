import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  display: grid;
  max-width: 80vw;
  grid-auto-rows: 40%;
  grid-gap: 1rem;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(3, 1fr);
  p {
    margin-bottom: 10px;
  }
  @media all and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: auto;
  }
  @media all and (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: auto;
  }
`;

export const Category = styled.div`
  margin: 2rem 0.7rem;
  box-shadow: -2px 2px 10px 0px rgba(#444, 0.4);
  transition: transform 0.3s ease-in-out;
  text-transform: uppercase;
  font-weight: 500;
  a {
    cursor: pointer;
  }
  &:hover {
    transform: scale(1.05);
  }
  @media all and (max-width: 768px) {
    margin: 0.7rem 0.7rem;
  }
`;

export const CategoryImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media all and (max-width: 768px) {
    width: 60%;
    height: auto;
  }
  @media all and (max-width: 320px) {
    width: 30%;
    height: auto;
  }
`;
