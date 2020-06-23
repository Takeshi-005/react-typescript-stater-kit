import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { COLOR } from '../../../../styles/style';

// ______________________________________________________
//
// @ Types
type Props = {
  path: string;
  naviText: string;
  exact: boolean;
  className?: string;
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => {
  const match = useRouteMatch({
    path: props.path,
    exact: props.exact
  });

  return (
    <li className={`${props.className} ${match ? 'active' : ''}`}>
      <Link to={props.path}>{props.naviText}</Link>
    </li>
  );
};

//______________________________________________________
//
// @ StyledComponent
export default styled(Component)`
  display: flex;
  height: 100%;
  padding: 12px 0;
  > a {
    padding: 8px;
  }

  &.active {
    > a {
      background: ${COLOR.current};
      border-radius: 10px;
      font-weight: 700;
      color: #fff;
    }
  }
`;
