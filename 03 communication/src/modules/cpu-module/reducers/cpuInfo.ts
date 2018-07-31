import { actionsEnums } from '../common/actionsEnums';

export interface CPUInfoState {
  databaseId : number, 
  percentage: number;
}

const defaultCPUInfoState: () => CPUInfoState = () => ({
  databaseId : 0,
  percentage: 0
});

export const cpuInfoReducer = (state = defaultCPUInfoState(), action) => {
  switch (action.type) {
    case actionsEnums.CPU_RATE_CHANGED:
      return handleCPURateAction(state, action.payload);
    case actionsEnums.DATABASE_CHANGED:
      return handleDatabaseChanged(state, action.payload);      
  }

  return state;
}

const handleCPURateAction = (state: CPUInfoState, percentage : number) => {
  return {
    ...state,
    percentage,
  };
}

const handleDatabaseChanged = (state: CPUInfoState, databaseId  : number) => {
  return {
    ...state,
    databaseId,
  };
}
