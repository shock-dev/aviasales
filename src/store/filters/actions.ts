import { FiltersActionTypes } from './types';

export const setSortBy = (val: string) => ({
    type: FiltersActionTypes.SET_SORT_BY,
    payload: val
});
