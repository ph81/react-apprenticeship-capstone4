import { useCartContext } from '../../../context/CartContext';
import CartColumns from '../CartColumns';
import CartItem from '../CartItem';
import CartTotals from '../CartTotals';
import { Section } from '../../../GlobalStyles';
import {
  CartContainer,
  CartItems,
  CartLink,
  ClearBtn,
} from './CartContent.styles';

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Section>
      <h2>Your cart</h2>
      <CartColumns />
      <CartItems>
        {cart.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </CartItems>
      <hr />
      <CartContainer>
        <CartLink to="/">continue shopping</CartLink>
        <ClearBtn type="button" onClick={clearCart}>
          clear shopping cart
        </ClearBtn>
      </CartContainer>
      <CartTotals />
    </Section>
  );
};

export default CartContent;
