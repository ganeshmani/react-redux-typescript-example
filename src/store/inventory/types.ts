export interface Inventory {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  brand?: string;
  currentInventory: number;
}

export enum InventoryActionTypes {
  FETCH_REQUEST = "@@inventory/FETCH_REQUEST",
  FETCH_SUCCESS = "@@inventory/FETCH_SUCCESS",
  FETCH_ERROR = "@@inventory/FETCH_ERROR"
}

export interface InventoryState {
  readonly loading: boolean;
  readonly data: Inventory[];
  readonly errors?: string;
}
