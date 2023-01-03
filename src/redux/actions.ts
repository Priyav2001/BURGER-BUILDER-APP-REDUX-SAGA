import { ItemsTypes } from "./actiontypes";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const LOAD_REQUEST = 'LOAD_REQUEST';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILURE = 'LOAD_FAILURE';

  
export interface Item {
  id: number,
  text: string,
  editing: boolean,
  complete: boolean
}

export const loadRequest = () => ({
  type: ItemsTypes.LOAD_REQUEST,
});

export const loadSuccess = (data: Item[]) => ({
  type: ItemsTypes.LOAD_SUCCESS,
  data,
});

export const loadFailure = () => ({
  type: ItemsTypes.LOAD_FAILURE,
});
