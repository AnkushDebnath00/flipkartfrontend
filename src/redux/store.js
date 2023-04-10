import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  getProductsReducer,
  getProductDetailReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailReducer,
  cart: cartReducer,
});

const middleware = [thunk];

const store = configureStore(
  { reducer: reducers },
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
