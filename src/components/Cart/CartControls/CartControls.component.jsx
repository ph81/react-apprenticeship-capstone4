import { useCartContext } from '../../../context/CartContext';
import { FiShoppingCart } from 'react-icons/fi';
import {
  CartContainer,
  CartValue,
  ClearBtn,
  Controls,
  ControlsBtn,
} from './CartControls.styles';

const CartControls = () => {
  const { total_items, clearCart } = useCartContext();

  return (
    <Controls>
      <ControlsBtn to="/cart">
        Cart
        <CartContainer>
          <FiShoppingCart />
          <CartValue>{total_items}</CartValue>
        </CartContainer>
      </ControlsBtn>
      <ClearBtn
        onClick={() => {
          clearCart();
        }}
      ></ClearBtn>
    </Controls>
  );
};

export default CartControls;
