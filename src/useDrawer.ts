import {
  useState,
  useCallback,
  FunctionComponent
} from "react";


export interface Props  {
    contentType:string;
    passVals:　{};
    openDrawer: (contentType?: string, passVals?: any) => void;
}

const useDrawer = (
  drawerContents:FunctionComponent<Props> | Function = () => null,
  isOpen:boolean,
) => {
  const [drawerState, updateDrawerState] = useState({
    isOpen: isOpen || false,
    contentType: "",
    passVals: "",
  });

  const closeDrawer = useCallback(() => {
    updateDrawerState({
      ...drawerState,
      isOpen: false,
    })
  }, [drawerState])

  const openDrawer = useCallback((contentType:string = "", passVals="") => {
    updateDrawerState({
      ...drawerState,
      contentType,
      passVals,
      isOpen: true,
    })
  }, [drawerState])

  const toggleDrawer = useCallback( () => {
    updateDrawerState({
      ...drawerState,
      isOpen: !drawerState.isOpen,
    });
  }, [drawerState])

  return {
    openDrawer,
    closeDrawer,
    toggleDrawer,
    drawerContent: drawerContents({
      contentType: drawerState.contentType,
      passVals: drawerState.passVals,
      openDrawer
    }),
    drawerState,
  }
}

export default useDrawer;
