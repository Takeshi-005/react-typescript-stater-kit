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
import { getDocumentScroll } from '../utilities/getDocumentScroll';

export interface Props {
  passVals: {};
}

const useDrawer = (
  drawerContents: FunctionComponent<Props>,
  isOpen: boolean
) => {
  const [drawerState, updateDrawerState] = useState({
    isOpen: isOpen || false,
    passVals: '',
    scrollPosY: 0
  });

  const closeDrawer = useCallback(() => {
    updateDrawerState({
      ...drawerState,
      isOpen: false
    });
  }, [drawerState]);

  const openDrawer = useCallback(
    (passVals = '') => {
      updateDrawerState({
        ...drawerState,
        passVals,
        scrollPosY: getDocumentScroll().y,
        isOpen: true
      });
    },
    [drawerState]
  );

  const toggleDrawer = useCallback(() => {
    updateDrawerState({
      ...drawerState,
      isOpen: !drawerState.isOpen
    });
  }, [drawerState]);

  return {
    openDrawer,
    closeDrawer,
    toggleDrawer,
    drawerContent: drawerContents({
      passVals: drawerState.passVals
    }),
    drawerState
  };
};

export default useDrawer;
