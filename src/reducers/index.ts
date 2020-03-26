import { combineReducers } from 'redux';
import state, { State } from './state';

export interface RootState {
  state: State;
}

export default combineReducers({
  state,
});
