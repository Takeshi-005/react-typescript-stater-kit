import { combineReducers } from "redux";
import state, {State} from "./state";

export type RootState = {
  state: State;

}

export default combineReducers({
  state,
});
