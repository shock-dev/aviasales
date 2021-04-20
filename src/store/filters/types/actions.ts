export enum FiltersActionTypes {
  SET_SORT_BY = 'filters/SET_SORT_BY'
}

export interface SetSortByAction {
  type: FiltersActionTypes.SET_SORT_BY
  payload: string
}

export type FiltersAction =
  | SetSortByAction
