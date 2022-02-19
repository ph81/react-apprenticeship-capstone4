import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/productReducer';
import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';
import { useLatestAPI } from '../utils/hooks/useLatestAPI';
import { GET_PRODUCTS_BEGIN, GET_PRODUCTS_SUCCESS } from '../utils/actions';

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
};

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //fetching data
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

  // fetching products
  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    const fetchProducts = async () => {
      dispatch({ type: GET_PRODUCTS_BEGIN });
      try {
        const response = await axios.get(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}&lang=en-us&pageSize=80`,
          {
            signal: controller.signal,
          }
        );
        const products = response.data.results;

        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
      } catch (err) {
        return;
      }
    };

    fetchProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
