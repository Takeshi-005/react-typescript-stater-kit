import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getZipcode, Params } from '../actions/zipcode';
import { RootState } from '../reducers/index';
import { ZipCodeState } from '../reducers/zipcode';

export const useGetZipcode = () => {
  const dispatch = useDispatch();
  const onChange = (params: Params) => dispatch(getZipcode.start(params));
  const onDelete = (index: number) => dispatch(getZipcode.delete(index));
  const value = useSelector<RootState, ZipCodeState>(
    state => state.zipcodeReducer,
    shallowEqual
  );

  return { value, onChange, onDelete };
};
