import { Reducer } from 'redux';
import { AxiosError } from 'axios';

import { ZipcodeAction, Params, Result } from '../actions/zipcode';
import { GET_ZIP_CODE as ActionType } from '../actions/zipcodeConstants';

export interface ZipCodeState {
  params?: Params;
  result: {
    code: Result['code'];
    data: Result['data'];
  }[];
  error?: AxiosError | null;
}

export const initialState: ZipCodeState = {
  result: []
};

const zipcodeReducer: Reducer<ZipCodeState, ZipcodeAction> = (
  state: ZipCodeState = initialState,
  action: ZipcodeAction
): ZipCodeState => {
  switch (action.type) {
    case ActionType.START:
      return {
        ...state,
        params: action.payload
      };

    case ActionType.SUCCEED:
      const value = {
        ...action.payload.result
      };

      return {
        ...state,
        result: [...state.result, value]
      };

    case ActionType.DELETE:
      const newValues = { ...state };
      newValues['result'] = state.result.filter(
        (v, i) => i !== action.payload.index
      );

      return {
        ...newValues
      };

    case ActionType.FAIL:
      return {
        ...state,
        error: action.payload.error
      };

    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default zipcodeReducer;
