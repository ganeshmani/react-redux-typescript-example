import { action } from "typesafe-actions";
import { InventoryActionTypes, Inventory, InventoryState } from "./types";

export const fetchRequest = () => action(InventoryActionTypes.FETCH_REQUEST);

export const fetchSuccess = (data: Inventory[]) =>
  action(InventoryActionTypes.FETCH_SUCCESS, data);

export const fetchError = (message: string) =>
  action(InventoryActionTypes.FETCH_ERROR, message);
