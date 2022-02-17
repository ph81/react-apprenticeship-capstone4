import styled from 'styled-components';

export const Searchbar = styled.div`
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 80px;
  background-color: var(--clr-white);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchForm = styled.form`
  display: flex;
  height: 40px;
  padding: 2px;
  background: #1e232b;
  min-width: 18% !important;
  border-radius: 2px;
  border: 1px solid rgba(155, 155, 155, 0.2);
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  color: #fff;
  font-size: 17px;
  border: none;
  font-weight: 500;
  background: none;
`;

export const SearchBtn = styled.button`
  padding: 0 15px;
  color: #fff;
  font-size: 17px;
  background: lightgray;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background: #2f4f4f;
  }
`;
