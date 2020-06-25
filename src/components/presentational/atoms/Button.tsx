import React from 'react';
import styled, { css } from 'styled-components';
// ______________________________________________________
//
// @ Constants
const BUTTON = {
  primary: {
    color: 'rgb(255, 255, 255)',
    bg: 'rgb(234, 53, 45)',
    border: 'rgb(234, 53, 45)'
  },
  secondary: {
    color: 'rgb(0,0,0)',
    bg: '#ff0'
  },
  disabled: {
    color: '#fff',
    bg: '#ccc'
  }
} as const;

// ______________________________________________________
//
// @ Types
export type ButtonKeys = keyof typeof BUTTON;

type Props = {
  /** 表示するテキスト */
  text: string;
  /** styled-components */
  className?: string;
  /** ボタンのスタイルを指定する */
  types: ButtonKeys;
  style?: {
    widht: string;
  };
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

// ______________________________________________________
//
// @ Component
export const Component = (props: Props) => (
  <StyledComponent {...props} onClick={props.handleClick}>
    {props.text}
  </StyledComponent>
);
// export default Button;
// ______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled.button<Props>`
  background-color: ${props =>
    props.types ? BUTTON[props.types].bg : BUTTON.primary.bg};
  color: ${props =>
    props.types ? BUTTON[props.types].color : BUTTON.primary.color};
  display: block;
  font-size: 14px;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-radius: 4px;
  padding: 8px 10px;
  width: ${props => props.style?.widht ?? '100%'}
  cursor: pointer;
  /* primaryのみ */
  ${props =>
    props.types === 'primary' &&
    css`
      border-color: ${BUTTON[props.types]};
    `}
`;

export default Component;
