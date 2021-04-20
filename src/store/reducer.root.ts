import { combineReducers } from 'redux';
import tickets from './tickets/reducer';

const root = combineReducers({
  tickets
});

export default root;
