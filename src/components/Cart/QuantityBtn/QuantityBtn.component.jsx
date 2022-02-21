import PropTypes from 'prop-types';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { Quantity } from './QuantityBtn.styles';

const QuantityBtn = ({ increase, decrease, amount }) => {
  return (
    <Quantity>
      <button type="button" onClick={decrease}>
        <FiMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button type="button" onClick={increase}>
        <FiPlus />
      </button>
    </Quantity>
  );
};

export default QuantityBtn;

QuantityBtn.propTypes = {
  increase: PropTypes.func,
  decrease: PropTypes.func,
  amount: PropTypes.number,
};
