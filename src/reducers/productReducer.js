import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../utils/actions';

const productReducer = (state, action) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }

  if (action.type === GET_PRODUCTS_SUCCESS) {
    return { ...state, products_loading: true, products: action.payload };
  }

  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default productReducer;
