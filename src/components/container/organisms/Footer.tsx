import React from 'react';
import styled from 'styled-components';

// ______________________________________________________
//
// @ Types
type Props = {
  className?: string;
};

// ______________________________________________________
//
// @ View
const Footer: React.FC<Props> = props => (
  <footer className={props.className}>Footer</footer>
);

// ______________________________________________________
//
// @ StyledView
export default styled(Footer)`
  background: #222;
  color: #fff;
`;
