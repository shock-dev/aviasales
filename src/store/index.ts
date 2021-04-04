import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import tickets from './tickets/reducer';
import { TicketsState } from './tickets/types';

export interface ApplicationState {
    tickets: TicketsState
}

const root = combineReducers({
    tickets
});

const store = createStore(
    root,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
