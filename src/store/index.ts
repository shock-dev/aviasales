import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { TicketsState } from './tickets/types';
import { FiltersState } from './filters/types';
import tickets from './tickets/reducer';
import filters from './filters/reducer';

export interface ApplicationState {
    tickets: TicketsState,
    filters: FiltersState
}

const root = combineReducers({
    tickets,
    filters
});

const store = createStore(
    root,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
