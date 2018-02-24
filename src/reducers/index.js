import { combineReducers } from 'redux';
import roastersReducer from './roastersReducer';
import coffeeReducer from './coffeeReducer';
import userReducer from './userReducer';

export const rootReducer = combineReducers({
  roasters: roastersReducer,
  coffees: coffeeReducer,
  user: userReducer
})
