import styled from 'styled-components';

export const ProductWrapper = styled.section`
  max-width: 1100px;
  margin: 2rem auto;
  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90vh;
  margin-top: 10px;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ColDetail = styled.div`
  width: 50%;
  height: 100vh;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductContent = styled.div`
  padding: 2rem 1rem;
  @media screen and (min-width: 992px) {
    padding-top: 0;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  text-transform: capitalize;
  font-weight: 500;
  color: #12263a;
  margin: 1rem 0;
  padding-bottom: 0.6rem;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Price = styled.p`
  margin: 1rem 0;
  font-size: 2rem;
  font-weight: bold;
  span {
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const PurchaseInfo = styled.div`
  margin: 1.5rem 0;
  width: 20rem;
  input {
    width: 60px;
  }
  button {
    cursor: pointer;
    height: 3rem;
    width: 60%;
    font-weight: bold;
    text-align: center;
    border: 1px solid transparent;
    border-radius: 0.3rem;
    &:hover {
      opacity: 0.9;
    }
  }
`;

export const ProductSpecs = styled.div`
  h2 {
    text-align: center;
    text-transform: capitalize;
    color: #12263a;
    padding-bottom: 0.6rem;
  }
  p {
    display: flex;
    font-size: 2rem;
    padding: 0.3rem;
    opacity: 0.8;
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
  ul {
    margin: 1rem 0;
    font-size: 1.8rem;
    text-align: left;
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
    li {
      margin: 0;
      list-style: none;
      background-size: 18px;
      padding-left: 1.7rem;
      margin: 1.5rem 0;
      font-weight: 600;
      opacity: 0.9;
      span {
        text-transform: uppercase;
        font-weight: bold;
        padding-left: 1rem;
      }
    }
  }
`;
