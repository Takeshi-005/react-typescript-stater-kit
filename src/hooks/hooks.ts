import { actionApi } from './../actions/api';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { RootState } from '../reducers/index';
import { ApiState } from '../../types/api';

export const useFetchApi = () => {
  const dispatch = useDispatch();
  const onChange = () => dispatch(actionApi.start()); // action
  const value = useSelector<RootState, ApiState>( // Types State
    state => state.apiRaducer, shallowEqual,
  );

  return { value, onChange };
};
