export interface FiltersState {
    sortBy: string,
    filters: string[]
}

export enum FiltersActionTypes {
    SET_SORT_BY = 'filters/SET_SORT_BY',
    SET_FILTER = 'filters/SET_FILTER',
    CLEAR_FILTER = 'filters/CLEAR_FILTER'
}

interface SetSortByAction {
    type: FiltersActionTypes.SET_SORT_BY
    payload: string
}

interface SetFilterAction {
    type: FiltersActionTypes.SET_FILTER
    payload: string
}

interface clearFilterAction {
    type: FiltersActionTypes.CLEAR_FILTER
    payload: string
}

export type FiltersAction =
    SetSortByAction |
    SetFilterAction |
    clearFilterAction
