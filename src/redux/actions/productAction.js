import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const addToCart = (productId) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: productId,
  };
};

export const removeFormCart = (productId) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: productId,
  };
};

export const adjustQty = (productId, productValue) => {
  return {
    type: ActionTypes.ADJUST_QTY,
    payload: {
      productId,
      qty: productValue,
    },
  };
};
