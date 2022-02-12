import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 100vw;
  margin-top: 1rem;
  margin-left: 1rem;
  text-align: center;
  padding: 1rem;
  color: black;
  background-color: var(--clr-primary-9);
  h4 {
    padding-left: 10px;
    width: 100%;
  }
`;

export const FilterCategory = styled.div`
  padding: 10px 20px;
`;

export const FilterItem = styled.span`
  text-align: left;
  font-size: 0.9em;
  padding: 2rem;
  input {
    margin-right: 0.5rem;
  }
`;
