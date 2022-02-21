//check if item is already in the cart
export const isInCart = (product, cartItems) => {
  return cartItems.find((item) => item.id === product.id);
};

//check if url has query params
export const hasQueryParams = (url) => {
  return url.includes('?');
};
