import { combineReducers} from 'redux';
import { cpuInfoReducer, CPUInfoState } from './cpuInfo';

export interface State {
  cpuInfoReducer : CPUInfoState;
};

export const reducers = combineReducers<State>({
  cpuInfoReducer
});
