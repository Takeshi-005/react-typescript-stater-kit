import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import Main from '../../../templates/Main';

// ______________________________________________________
//
// @ Types
type ContainerProps = RouteComponentProps & { className?: string };
type Props = ContainerProps & {};

// ______________________________________________________
//
// @ Container
const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />;
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => (
  <Main>
    <div className={props.className}>Calendar</div>
  </Main>
);

//______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled(Component)`
gb
`;

export default Container;
