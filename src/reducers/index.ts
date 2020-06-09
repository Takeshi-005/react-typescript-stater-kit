import { combineReducers } from 'redux';
import zipcodeReducer, { ZipCodeState } from './zipcode';

export interface RootState {
  zipcodeReducer: ZipCodeState;
}

export default combineReducers({
  zipcodeReducer
});
