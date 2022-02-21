import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext';
import QuantityBtn from '../QuantityBtn';
import { FiTrash } from 'react-icons/fi';
import {
  Item,
  ItemTitle,
  Price,
  QuantityItem,
  RemoveBtn,
  Subtotal,
} from './CartItem.styles';

const CartItem = ({ id, image, name, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    toggleAmount(id, 'inc');
  };

  const decrease = () => {
    toggleAmount(id, 'dec');
  };

  return (
    <Item>
      <ItemTitle>
        <img src={image} alt={name} />
        <div>
          <Link to={`/product/${id}`}>
            <h4>{name}</h4>
          </Link>
        </div>
      </ItemTitle>
      <Price>${price}</Price>
      <QuantityItem>
        <QuantityBtn amount={amount} increase={increase} decrease={decrease} />
      </QuantityItem>
      <Subtotal>${price * amount}</Subtotal>
      <RemoveBtn onClick={() => removeItem(id)} title="Remove from cart">
        <FiTrash />
      </RemoveBtn>
    </Item>
  );
};

export default CartItem;

CartItem.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  amount: PropTypes.number,
};
