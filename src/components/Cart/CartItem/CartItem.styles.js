import styled from 'styled-components';

export const Item = styled.article`
  display: grid;
  grid-template-columns: 35% 20% 10% 20% auto;
  align-items: flex-start;
  grid-template-rows: 160px;
  @media all and (max-width: 768px) {
    grid-template-columns: 35% 20% 10% 20% auto;
  }
`;

export const ItemTitle = styled.div`
  height: 100%;

  display: grid;
  grid-template-columns: 35% 65%;
  align-items: center;
  gap: 1rem;
  text-align: left;
  img {
    width: 70%;
    height: auto;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  h4 {
    font-size: 2rem;
    margin-bottom: 0;
  }
  @media all and (max-width: 768px) {
    h4 {
      font-size: 1.5rem;
    }
  }
`;

export const Subtotal = styled.h4`
  display: block;
  margin-bottom: 0;
  color: var(--clr-grey-5);
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 5rem;
  margin-left: 6rem;
  @media all and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Price = styled.h4`
  display: block;
  font-size: 1.5rem;
  color: var(--clr-primary-5);
  font-size: 1.5rem;
  font-weight: 500;
  text-align: left;
  margin-top: 5rem;
  margin-left: 6rem;
  @media all and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const QuantityItem = styled.h4`
  margin-top: 5rem;
  width: 75px;
  align-items: center;
  button {
    width: 1rem;
    height: 0.5rem;
    font-size: 0.75rem;
  }
`;

export const RemoveBtn = styled.button`
  margin-top: 5rem;
  width: 20px;
  margin-left: 4rem;
  color: var(--clr-white);
  background: transparent;
  border: transparent;
  letter-spacing: var(--spacing);
  background: var(--clr-red-dark);
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius);
  font-size: 0.9rem;
  cursor: pointer;
`;
