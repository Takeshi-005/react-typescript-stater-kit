import { Reducer } from 'redux';
import { ActionTypes, ApiAction } from '../actions/api';
import { ApiState } from '../../types/api';

const initialState:ApiState = {
  products:[],
  isLoading: false,
}

const reducer: Reducer<ApiState,ApiAction> = (
  state: ApiState = initialState,
  action: ApiAction
): ApiState => {
  switch (action.type) {
    case ActionTypes.START:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.SUCCEED:
      return {
        ...state,
        products: action.payload.result,
        isLoading: false
      }
    case ActionTypes.FAIL:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false
      }

    default:
      return state
  }
};

export default reducer;
