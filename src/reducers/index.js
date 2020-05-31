import { combineReducers } from 'redux';
import contactReducer from './contactReducer';

export default combineReducers({
  // ovde idu svi reduceri npr:
  contact: contactReducer,
});
