import styled from 'styled-components';

export const Filters = styled.div`
  margin-left: -200px;
  padding: 0;
  width: 200px;
  position: fixed;
  height: 70%;
  overflow: auto;
  @media screen and (max-width: 700px) {
    margin: 0;
    width: 100%;
    height: auto;
    position: relative;
  }
`;

export const FilterCategory = styled.a`
  display: block;
  color: white;
  padding: 16px;
  text-decoration: none;
  &:active {
    color: var(--clr-primary-4);
  }
  &:hover:not(.active) {
    cursor: pointer;
    color: var(--clr-primary-3);
  }
  @media screen and (max-width: 700px) {
    float: left;
  }
  @media screen and (max-width: 400px) {
    text-align: center;
    float: none;
  }
`;

export const ClearFilter = styled.div`
  margin-top: 2rem;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
`;
