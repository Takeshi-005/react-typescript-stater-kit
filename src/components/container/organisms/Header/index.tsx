import React from 'react';
import styled from 'styled-components';

import { COLOR } from '../../../../styles/style';
import { routes } from '../../../../routes/routes';
import Link from './NavLink';

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
            <Link
              key={item.path}
              path={item.path}
              exact={item.exact}
              naviText={item.naviText ?? ''}
            />
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
  padding: 16px;
  > nav {
    > ul {
      display: flex;
    }
  }
`;
