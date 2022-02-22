import PropTypes from 'prop-types';
import { useCartContext } from '../../../context/CartContext';
import { GoCheckout, Totals } from './CartTotals.styles';

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();

  return (
    <Totals>
      <article>
        <h5>
          Subtotal: <span>$ {total_amount}</span>
        </h5>
        <p>
          Shipping fee: <span>$ {shipping_fee}</span>
        </p>
        <hr />
        <h4>
          Order total: <span>$ {total_amount + shipping_fee}</span>
        </h4>
      </article>
      <GoCheckout to="/checkout">Proceed to checkout</GoCheckout>
    </Totals>
  );
};

export default CartTotals;

CartTotals.propTypes = {
  total_amount: PropTypes.number,
  shipping_fee: PropTypes.number,
};
