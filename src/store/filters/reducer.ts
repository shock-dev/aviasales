import produce from 'immer';
import { FiltersState } from './types/state';
import { FiltersAction, FiltersActionTypes } from './types/actions';

const initialFiltersState: FiltersState = {
  sortBy: 'cheap',
  filters: ['all']
};

const filters = produce((draft, action: FiltersAction) => {
  switch (action.type) {
    case FiltersActionTypes.SET_SORT_BY:
      draft.sortBy = action.payload;
      break;

    case FiltersActionTypes.SET_FILTER:
      draft.filters = action.payload;
      break;

    case FiltersActionTypes.CLEAR_FILTER:
      draft.filters = ['all'];
      break;

    default:
      break;
  }
}, initialFiltersState);

export default filters;
