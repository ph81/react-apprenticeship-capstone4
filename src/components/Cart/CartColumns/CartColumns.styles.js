import styled from 'styled-components';

export const Columns = styled.div`
  display: block;
  width: 70vw;
  hr {
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
  @media all and (max-width: 768px) {
    display: none;
  }
`;

export const Rows = styled.div`
  display: grid;
  grid-template-columns: 35% 1fr 1fr 1fr 1fr;
  justify-items: center;
  column-gap: 1rem;
  h4 {
    color: grey;
    font-weight: 400;
    font-size: 2rem;
  }
  span {
    width: 2rem;
    height: 2rem;
  }
`;
