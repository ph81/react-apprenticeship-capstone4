import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  margin-bottom: 6rem;
  gap: 2rem;
`;

export const CartItems = styled.div`
  display: block;
  width: 70vw;
`;

export const CartLink = styled(Link)`
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  padding: 0.25rem 0.5rem;
  background: var(--clr-primary-5);
  color: var(--clr-white);
  border-radius: var(--radius);
  letter-spacing: var(--spacing);
  font-size: 1.7rem;
  cursor: pointer;
  &:hover {
    color: var(--clr-white);
  }
  @media all and (max-width: 768px) {
    font-size: 1.1rem;
    align-items: center;
  }
`;

export const ClearBtn = styled.button`
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  padding: 0.25rem 0.5rem;
  color: var(--clr-white);
  border-radius: var(--radius);
  letter-spacing: var(--spacing);
  font-size: 1.7rem;
  cursor: pointer;
  background: var(--clr-black);
  @media all and (max-width: 768px) {
    font-size: 0.9rem;
    align-items: center;
  }
`;
