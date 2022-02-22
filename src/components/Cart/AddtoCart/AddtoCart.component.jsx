import { useState } from 'react';
import { useCartContext } from '../../../context/CartContext';
import QuantityBtn from '../QuantityBtn';
import { AddCart, LinkCart } from './AddtoCart.styles';

const AddToCart = ({ product, showQuantity }) => {
  const { addToCart } = useCartContext();
  const { id, stock } = product;
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <AddCart>
      {showQuantity ? (
        <QuantityBtn amount={amount} increase={increase} decrease={decrease} />
      ) : (
        ''
      )}
      <LinkCart to="/cart" onClick={() => addToCart(id, amount, product)}>
        Add to cart
      </LinkCart>
    </AddCart>
  );
};

export default AddToCart;
