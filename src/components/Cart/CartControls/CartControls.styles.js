import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Controls = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
`;

export const CartContainer = styled.span`
  display: flex;
  align-items: center;
  position: relative;
`;

export const ControlsBtn = styled(Link)`
  color: darkgray;
  font-size: 1.5rem;
  letter-spacing: 1.5;
  color: grey;
  display: flex;
  align-items: center;
`;

export const CartValue = styled.span`
  position: absolute;
  top: -10px;
  right: -16px;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 12px;
`;

export const ClearBtn = styled.button`
  color: darkgray;
  font-size: 1.5rem;
  letter-spacing: 1.5;
  color: grey;
  display: flex;
  align-items: center;
`;
