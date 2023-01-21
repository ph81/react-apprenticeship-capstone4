import PropTypes from 'prop-types';
import { useCartContext } from '../../../context/CartContext';
import { FiShoppingCart } from 'react-icons/fi';
import { CartValue, ShopCart } from './CartBtn.styles';

const CartBtn = () => {
  const { total_items } = useCartContext();

  return (
    <ShopCart>
      <FiShoppingCart />
      {total_items > 0 && <CartValue>{total_items}</CartValue>}
    </ShopCart>
  );
};

export default CartBtn;

CartBtn.propTypes = {
  total_items: PropTypes.number,
};
