import { combineReducers } from 'redux';
import { roastersReducer } from './roastersReducer';
import { coffeeReducer } from './coffeeReducer';

export const rootReducer = combineReducers({
  roasters: roastersReducer,
  coffees: coffeeReducer
})
