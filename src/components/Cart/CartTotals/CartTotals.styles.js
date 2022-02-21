import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Totals = styled.section`
  margin-top: 3rem;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
    margin: 2rem auto;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    font-size: 1.7rem;
    text-transform: capitalize;
  }
  h4 {
    font-size: 2rem;
    margin-top: 2rem;
  }
  h5 {
    font-size: 1.7rem;
  }
  @media all and (max-width: 768px) {
    margin-top: 2rem;
    article {
      padding: 1rem 2rem;
    }
    h4,
    h5,
    p {
      display: grid;
      grid-template-columns: 150px 1fr;
    }
    h4 {
      margin-top: 1rem;
    }
  }
`;

export const GoCheckout = styled(Link)`
  margin-top: 1rem;
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  padding: 0.25rem 0.5rem;
  color: var(--clr-white);
  border-radius: var(--radius);
  letter-spacing: var(--spacing);
  font-size: 1.7rem;
  cursor: pointer;
  background: var(--clr-primary-2);
  align-items: center;
  &:hover {
    color: var(--clr-white);
  }
`;
