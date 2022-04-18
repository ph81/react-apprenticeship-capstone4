import styled from 'styled-components';

export const Paginate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 3rem auto;
  width: 100%;
`;

export const Page = styled.button`
  color: var(--clr-grey-1);
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: solid 0.2rem var(--clr-primary-3);
  background-color: transparent;
  border-radius: 0.7rem;
  cursor: pointer;
  &:active&:hover {
    color: var(--clr-white);
    background-color: var(--clr-primary-3);
  }
  &:disabled {
    background-color: transparent !important;
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
