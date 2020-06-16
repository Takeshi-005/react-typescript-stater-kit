import React from 'react';
import styled from 'styled-components';

// ______________________________________________________
//
// @ Types
type Props = { className?: string };

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => (
  <main className={props.className}>{props.children}</main>
);

//______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled(Component)`
  padding: 16px;
`;

export default StyledComponent;
