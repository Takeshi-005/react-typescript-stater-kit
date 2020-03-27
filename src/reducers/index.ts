import { combineReducers } from 'redux';
import apiRaducer from './api';
import { ApiState } from '../../types/api';


export interface RootState {
  apiRaducer: ApiState;
}

export default combineReducers({
  apiRaducer,
});
