/*
*+ Usage
*   const {
    drawerState,
    closeDrawer,
    drawerContent,
    openDrawer,
  } = useDrawer(DrawerContents, false, DRAWER_TYPE.PROFILE)
*/

import { useState, useCallback, FunctionComponent } from 'react';
import { getDocumentScroll } from 'utilities/getDocumentScroll';

export interface Props<T> {
  contentType: T;
  passVals: {};
  openDrawer: (contentType?: T, passVals?: any) => void;
}

const useDrawer = <T extends string>(
  drawerContents: FunctionComponent<Props<T>> | Function = () => null,
  isOpen: boolean,
  contentType: T,
) => {
  const [drawerState, updateDrawerState] = useState({
    isOpen: isOpen || false,
    contentType,
    passVals: '',
    scrollPosY: 0,
  });

  const closeDrawer = useCallback(() => {
    updateDrawerState({
      ...drawerState,
      isOpen: false,
    });
  }, [drawerState]);

  const openDrawer = useCallback(
    (contentType: T, passVals = '') => {
      updateDrawerState({
        ...drawerState,
        contentType,
        passVals,
        scrollPosY: getDocumentScroll().y,
        isOpen: true,
      });
    },
    [drawerState],
  );

  const toggleDrawer = useCallback(() => {
    updateDrawerState({
      ...drawerState,
      isOpen: !drawerState.isOpen,
    });
  }, [drawerState]);

  return {
    openDrawer,
    closeDrawer,
    toggleDrawer,
    drawerContent: drawerContents({
      contentType: drawerState.contentType,
      passVals: drawerState.passVals,
      openDrawer,
    }) as Props<T>,
    drawerState,
  };
};

export default useDrawer;
