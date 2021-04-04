import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import tickets from './tickets/reducer';

const root = combineReducers({
    tickets
});

const store = createStore(
    root,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
