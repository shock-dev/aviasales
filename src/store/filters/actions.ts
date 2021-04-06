import { FiltersActionTypes } from './types';

export const setSortBy = (val: string) => ({
    type: FiltersActionTypes.SET_SORT_BY,
    payload: val
});

export const setFilter = (val: string) => ({
    type: FiltersActionTypes.SET_FILTER,
    payload: val
});

export const clearFilter = (val: string) => ({
    type: FiltersActionTypes.CLEAR_FILTER,
    payload: val
});
