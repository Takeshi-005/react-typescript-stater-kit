import { AxiosError } from 'axios';

// import { User } from '../services/github/models';
import * as ActionType from './zipcodeConstants';

export interface Params {
  zipcode: string;
}

export type Data = {
  prefcode: string;
  ja: {
    prefecture: string;
    address1: string;
    address2: string;
    address3: string;
    address4: string;
  };
  en: {
    prefecture: string;
    address1: string;
    address2: string;
    address3: string;
    address4: string;
  };
};

export type Result = {
  code: string;
  data: Data[];
};

export const getZipcode = {
  start: (params: Params) => ({
    type: ActionType.GET_ZIP_CODE.START,
    payload: params
  }),

  succeed: (params: Params, result: Result) => ({
    type: ActionType.GET_ZIP_CODE.SUCCEED,
    payload: { params, result }
  }),

  fail: (error: AxiosError) => ({
    type: ActionType.GET_ZIP_CODE.FAIL,
    payload: { error }
  }),

  delete: (index: number) => ({
    type: ActionType.GET_ZIP_CODE.DELETE,
    payload: { index }
  })
};

export type ZipcodeAction =
  | ReturnType<typeof getZipcode.start>
  | ReturnType<typeof getZipcode.succeed>
  | ReturnType<typeof getZipcode.fail>
  | ReturnType<typeof getZipcode.delete>;
