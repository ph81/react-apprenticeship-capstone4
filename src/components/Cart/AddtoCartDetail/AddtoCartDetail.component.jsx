import { useState } from 'react';
import { useCartContext } from '../../../context/CartContext';
import QuantityBtn from '../QuantityBtn';
import { AddCartDetail, LinkCart } from './AddtoCartDetail.styles';

const AddToCartDetail = ({ product }) => {
  const { addToCartFromDetail } = useCartContext();
  const { id, stock } = product;
  const [amount, setAmount] = useState(1);
  //console.log(product);

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
    <AddCartDetail>
      <QuantityBtn amount={amount} increase={increase} decrease={decrease} />
      <LinkCart
        to="/cart"
        onClick={() => addToCartFromDetail(id, amount, product)}
      >
        Add to cart
      </LinkCart>
    </AddCartDetail>
  );
};

export default AddToCartDetail;
