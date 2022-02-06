import styled from 'styled-components';

export const Item = styled.div`
  padding: 20px 30px;
  width: 24%;
  border-radius: 3px;
  text-align: center;
  font-size: 1.5rem;
  margin: 1rem 0;
  @media all and (max-width: 768px) {
    width: 48%;
    font-size: 1.1rem;
  }
  @media all and (max-width: 480px) {
    width: 100%;
    font-size: 1rem;
  }
`;

export const Name = styled.div`
  color: #555;
  width: 100%;
  margin: 20px 10px;
  height: 2.2rem;
`;

export const Price = styled.div`
  margin-top: 1.1rem;
  color: #777;
  height: 2rem;
  font-weight: bold;
`;

export const Photo = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: auto;
  }
`;

export const Slug = styled.div`
  margin: 0 auto;
  color: white;
  height: 3rem;
  width: 12rem;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #777;
  padding: 10px;
  text-align: center;
`;
