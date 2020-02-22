import { action } from "typesafe-actions";

import { CartActionTypes, Cart, cartState } from "./types";
import { Inventory } from "../inventory/types";

export const fetchCartRequest = () =>
  action(CartActionTypes.FETCH_CART_REQUEST);

export const fetchSuccess = (data: Cart) =>
  action(CartActionTypes.FETCH_CART_SUCCESS, data);

export const fetchError = (message: string) =>
  action(CartActionTypes.FETCH_CART_ERROR, message);

export const addToCart = (item: Inventory) =>
  action(CartActionTypes.ADD_TO_CART, item);
