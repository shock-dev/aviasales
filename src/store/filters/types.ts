export interface FiltersState {
    sortBy: string
}

export enum FiltersActionTypes {
    SET_SORT_BY = 'filters/SET_SORT_BY'
}

interface SetSortByAction {
    type: FiltersActionTypes.SET_SORT_BY
    payload: string
}

export type FiltersAction =
    SetSortByAction
