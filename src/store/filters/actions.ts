import { FiltersActionTypes } from './types/actions';

export const setSortBy = (payload: string) => ({
  type: FiltersActionTypes.SET_SORT_BY,
  payload
});

export const setFilter = (payload: (number | string)[]) => ({
  type: FiltersActionTypes.SET_FILTER,
  payload
});

export const clearFilter = () => ({
  type: FiltersActionTypes.CLEAR_FILTER
});
