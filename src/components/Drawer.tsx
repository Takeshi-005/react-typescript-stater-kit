import React, { FC } from "react";
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types

export interface Props {
  isOpen: boolean;
  handleClick?: (e) => void;
  className?: string
  minus?: string;
  scrollPosY?: number
}

// ______________________________________________________
//
// @ View

const Drawer: FC<Props> = ({
  children,
  isOpen,
  handleClick,
  className,
  minus="240px",
  scrollPosY=0
}) => {
  if (isOpen && !document.body.classList.contains("is-drawer-open")) {
    document.body.classList.add("is-fixed");
    document.body.classList.add("is-drawer-open");
    document.body.style.top = `-${scrollPosY}px`;
  } else if (
    !isOpen &&
    document.body.classList.contains("is-drawer-open")
  ) {
    document.body.classList.remove("is-fixed");
    document.body.classList.remove("is-drawer-open");
    document.body.removeAttribute("style");
    window.scrollTo(0,scrollPosY);
  }

  return (
    <>
      {isOpen && (
        <div
          className={`p-drawer is-drawer-open ${className}`}
          onClick={handleClick}
        >
          <div
            className="inner"
            onClick={e => e.stopPropagation()}
            style={{width: `calc(100% - ${minus})` }}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

// ______________________________________________________
//
// @ StyledView

export default styled(Drawer)`
  background: rgba(0,0,0,0.7);
  border : none;
  bottom : 0;
  margin : 0;
  overflow: hidden;
  padding : 0;
  position: fixed;
  right : 0;
  top : 0;
  z-index : 9999;
  width: 100%;
  display: block;
  > .inner {
    background: #fff;
    height: 100%;
    min-width: 800px;
    overflow-y: auto;
    padding: 16px 0 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`
