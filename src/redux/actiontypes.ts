export interface Item {
    id: number,
    text: string,
    editing: boolean,
    complete: boolean
  }

  export enum ItemsTypes {
    LOAD_REQUEST = 'LOAD_REQUEST',
    LOAD_SUCCESS = 'LOAD_SUCCESS',
    LOAD_FAILURE = 'LOAD_FAILURE'
  }
  