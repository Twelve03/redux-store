import { ActionTypes } from "../constants/action-types";

const InitialState = {
  products: [],
  cart: [],
};

export const productReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};

export const cartReducer = (state = { cart: [] }, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      // Check if it's added already
      const inCart = state.cart.find((item) => item.id === payload.id)
        ? true
        : false;

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
            )
          : [...state.cart, { ...payload, qty: 1 }],
      };

    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload),
      };

    case ActionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.productId ? { ...item, qty: +payload.qty } : item
        ),
      };

    default:
      return state;
  }
};
