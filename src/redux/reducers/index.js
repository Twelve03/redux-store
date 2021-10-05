import { combineReducers } from "redux";
import {
  cartReducer,
  productReducer,
  selectedProductReducer,
} from "./productReducer";

const allReducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cart: cartReducer,
});

export default allReducers;
