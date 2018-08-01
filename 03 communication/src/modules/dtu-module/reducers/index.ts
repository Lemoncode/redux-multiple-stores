import { combineReducers} from 'redux';
import { dtuInfoReducer, DTUInfoState } from './dtuInfo';

export interface State {
  dtuInfoReducer : DTUInfoState;
};

export const reducers = combineReducers<State>({
  dtuInfoReducer
});
