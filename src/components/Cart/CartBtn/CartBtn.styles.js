import styled from 'styled-components';

export const CartBtnWrapper = styled.div`
  font-size: 1.5rem;
  letter-spacing: var(--spacing);
  display: flex;
  align-items: center;
`;

export const LinkBtn = styled.button`
  font-size: 1.5rem;
  letter-spacing: var(--spacing);
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ShopCart = styled.span`
  display: flex;
  align-items: center;
  position: relative;
  svg {
    margin-left: 5px;
  }
`;

export const CartValue = styled.span`
  position: absolute;
  top: -10px;
  right: -16px;
  background: var(--clr-primary-5);
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.1rem;
  color: var(--clr-white);
  padding: 12px;
`;
