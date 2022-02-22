import PropTypes from 'prop-types';
import { useCartContext } from '../../../context/CartContext';
import { useHistory } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { CartBtnWrapper, CartValue, LinkBtn, ShopCart } from './CartBtn.styles';

const CartBtn = () => {
  const { total_items } = useCartContext();
  const history = useHistory();

  return (
    <CartBtnWrapper>
      <LinkBtn role="link" onClick={() => history.push('/cart')} title="Cart">
        <ShopCart>
          <FiShoppingCart />
          <CartValue>{total_items}</CartValue>
        </ShopCart>
      </LinkBtn>
    </CartBtnWrapper>
  );
};

export default CartBtn;

CartBtn.propTypes = {
  total_items: PropTypes.number,
};
