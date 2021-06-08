import { combineReducers } from 'redux';
import tickets from './tickets/reducer';
import filters from './filters/reducer';

const root = combineReducers({
  tickets,
  filters
});

export default root;
