import styled from 'styled-components';

export const Quantity = styled.div`
  display: grid;
  width: 5rem;
  justify-items: flex-end;
  grid-template-columns: repeat(3, 1fr);
  align-items: flex-end;
  margin-top: 1.2rem;
  margin-left: auto;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
