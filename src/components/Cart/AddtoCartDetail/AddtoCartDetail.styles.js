import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AddCartDetail = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: max-content;
`;

export const LinkCart = styled(Link)`
  margin-left: 5rem;
  color: white;
  height: 4rem;
  width: 100%;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  background-color: var(--clr-primary-3);
  border: 1px solid transparent;
  border-radius: 0.3rem;
  &:hover {
    cursor: pointer;
  }
  /*
  @media all and (max-width: 768px) {
    margin-top: 0.5rem;
    margin-left: 1.5rem;
  }
  */
`;
