import React from 'react';
import styled from 'styled-components';
import Area from '../../../presentational/Area';
import { useGetZipcode } from '../../../../hooks/hooks';
import { Params } from '../../../../actions/zipcode';
import { ZipCodeState } from '../../../../reducers/zipcode';
import { RouteComponentProps } from 'react-router';

// ______________________________________________________
//
// @ Types
type ContainerProps = RouteComponentProps & {
  className?: string;
};

type Props = ContainerProps & {
  params: Params;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  useZipCode: {
    onChange: (params: Params) => void;
    onDelete: (index: number) => void;
    value: ZipCodeState;
  };
};

const Container: React.FC<ContainerProps> = props => {
  const [state, setState] = React.useState({
    zipcode: ''
  });
  const { onChange, onDelete, value } = useGetZipcode();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState({
      ...state,
      [e.currentTarget.name]: e.currentTarget.value
    });

  return (
    <StyledComponent
      {...props}
      params={state}
      handleChange={handleChange}
      useZipCode={{ onChange, onDelete, value }}
    />
  );
};

// ______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => (
  <>
    <section>
      <input type="text" name="zipcode" onChange={props.handleChange} />
      <button onClick={() => props.useZipCode.onChange(props.params)}>
        FetchApi
      </button>
    </section>
    {props.useZipCode.value.result.map((item, i) => (
      <Area
        key={i}
        area={{
          pref: item.data[0].ja.prefecture,
          city: item.data[0].ja.address1,
          town: item.data[0].ja.address2
        }}
        i={i}
        handleDelete={props.useZipCode.onDelete}
      />
    ))}
  </>
);

// ______________________________________________________
//
// @ StyledView
const StyledComponent = styled(Component)`
  background: #000;
`;

export default Container;
