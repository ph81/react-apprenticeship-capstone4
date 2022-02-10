import styled from 'styled-components';

export const ViewProductsBtn = styled.button`
  background-color: var(--clr-primary-5);
  color: var(--clr-white);
  padding: 1rem 2rem;
  border-radius: 3px;
  outline: none;
  border: none;
  font-size: 1.8rem;
  transition: all 0.5s ease;
  margin-bottom: 10rem;
  &:hover {
    transform: translateY(-0.5rem) scale(1.02);
    cursor: pointer;
  }
  &:active {
    transform: translateY(0.5rem);
  }
`;
