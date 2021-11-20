import { combineReducers } from 'redux';
import { mapInitialState, mapReducer } from './reducers/map';

export const rootInitialState = {
  map: mapInitialState,
};
export type GlobalState = typeof rootInitialState;

export const rootReducers = combineReducers({
  map: mapReducer,
});
