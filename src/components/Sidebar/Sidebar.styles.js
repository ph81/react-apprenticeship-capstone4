import styled from 'styled-components';

export const Filters = styled.div`
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: var(--clr-primary-9);
  position: fixed;
  height: 100%;
  overflow: auto;
  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
    position: relative;
  }
`;

export const FilterCategory = styled.div`
  display: block;
  color: yellow;
  padding: 16px;
  text-decoration: none;
  &:active {
    background-color: var(--clr-primary-4);
    color: white;
  }
  &:hover:not(.active) {
    cursor: pointer;
    background-color: var(--clr-primary-3);
    color: white;
  }
  @media screen and (max-width: 700px) {
    float: left;
  }
  @media screen and (max-width: 400px) {
    text-align: center;
    float: none;
  }
`;

export const FilterItem = styled.span`
  margin-left: 200px;
  padding: 1px 16px;
  min-height: 60vh;
  @media screen and (max-width: 700px) {
    margin-left: 0;
  }
`;

export const ClearFilter = styled.div`
  margin-top: 2rem;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
`;
