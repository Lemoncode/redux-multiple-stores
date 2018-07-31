import { combineReducers} from 'redux';
import { activeSelectionReducer, ActiveSelectionState } from './activeSelection';

export interface State {
  activeSelectionReducer : ActiveSelectionState;
};

export const reducers = combineReducers<State>({
  activeSelectionReducer
});
