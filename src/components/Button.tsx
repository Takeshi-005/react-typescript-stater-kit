import React from 'react';
import styled, { css } from 'styled-components'
import { BUTTON } from '../constants/style'

// ______________________________________________________
//
// @ Types
interface Props {
  /** 表示するテキスト */
  text: string;
  /** styled-components */
  className?:string;
  /** ボタンのスタイルを指定する */
  types?: keyof typeof BUTTON;
  handleClick?: (e:React.MouseEvent) => void;
}

// ______________________________________________________
//
// @ View
const Button = (props:Props) => (
  <StyledButton
    className={props.className}
    onClick={props.handleClick}
    types={props.types}
  >
    {props.text}
  </StyledButton>
)

// ______________________________________________________
//
// @ StyledView
const StyledButton = styled.button<Pick<Props, 'types'>>`
  background-color: ${props => props.types ? BUTTON[props.types].bg : BUTTON.primary.bg };;
  color: ${props => props.types ? BUTTON[props.types].color : BUTTON.primary.color };
  display: block;
  font-size: 14px;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-radius: 4px;
  padding: 8px 10px;
  cursor: pointer;
  /* primaryのみ */
  ${props => (props.types === "primary") && css`
    border-color: ${BUTTON[props.types]};
  `}
`;


export default Button;
