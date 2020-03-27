import { Products } from '../../types/api';
import { AxiosError } from 'axios';
export const ActionTypes = {
  START: 'fetch_api_start',
  SUCCEED: 'fetch_api_succeed',
  FAIL: 'fetch_api_fail',
} as const;

export const actionApi = {
  start: () => ({
    type: ActionTypes.START,
    payload: {}
  }),
  succeed: (result:Products[]) => ({
    type: ActionTypes.SUCCEED,
    payload: {result}
  }),
  fail: (error: AxiosError) => ({
    type: ActionTypes.FAIL,
    payload: {error},
    error: true
  })
}

export type ApiAction =
| ReturnType<typeof actionApi.start>
| ReturnType<typeof actionApi.succeed>
| ReturnType<typeof actionApi.fail>
