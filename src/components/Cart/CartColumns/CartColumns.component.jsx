import { Rows, Columns } from './CartColumns.styles';

const CartColumns = () => {
  return (
    <Columns>
      <Rows>
        <h4>Item</h4>
        <h4>Price</h4>
        <h4>Quantity</h4>
        <h4>Subtotal</h4>
        <span></span>
      </Rows>
      <hr />
    </Columns>
  );
};

export default CartColumns;
