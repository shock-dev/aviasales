import { FiltersAction, FiltersActionTypes, FiltersState } from './types';

const initialState: FiltersState = {
    sortBy: 'cheap'
};

const filters = (state = initialState, action: FiltersAction): FiltersState => {
    switch (action.type) {
        case FiltersActionTypes.SET_SORT_BY:
            return { ...state, sortBy: action.payload };
        default:
            return state;
    }
};

export default filters;
