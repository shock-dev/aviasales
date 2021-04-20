import { FiltersActionTypes } from './types/actions';

export const setSortBy = (payload: string) => ({
  type: FiltersActionTypes.SET_SORT_BY,
  payload
});
