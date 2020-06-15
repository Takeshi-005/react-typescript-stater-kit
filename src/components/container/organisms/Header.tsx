import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLOR } from '../../../constants/style';
import { routes } from '../../../routes/routes';

// ______________________________________________________
//
// @ Types
type Props = {
  className?: string;
};

// ______________________________________________________
//
// @ View
const Header: React.FC<Props> = props => (
  <header className={props.className}>
    <nav>
      <ul>
        {routes
          .filter(item => item.naviText)
          .map(item => (
            <li key={item.path}>
              <Link to={item.path}>{item.naviText}</Link>
            </li>
          ))}
      </ul>
    </nav>
  </header>
);

// ______________________________________________________
//
// @ StyledView
export default styled(Header)`
  border-bottom: 1px solid ${COLOR.border};
`;
