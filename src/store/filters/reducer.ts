import { FiltersAction, FiltersActionTypes, FiltersState } from './types';

const initialState: FiltersState = {
    sortBy: 'cheap',
    filters: ['all']
};

const filters = (state = initialState, action: FiltersAction): FiltersState => {
    switch (action.type) {
        case FiltersActionTypes.SET_SORT_BY:
            return { ...state, sortBy: action.payload };
        case FiltersActionTypes.SET_FILTER:
            return { ...state, filters: [...state.filters, action.payload] };
        case FiltersActionTypes.CLEAR_FILTER:
            const indexItem = state.filters.indexOf(action.payload);

            if (indexItem === -1) {
                return state;
            }

            const clone = [...state.filters];
            clone.splice(indexItem, 1);

            return {...state, filters: [...clone]};
        default:
            return state;
    }
};

export default filters;
