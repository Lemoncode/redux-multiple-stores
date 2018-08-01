import { actionsEnums } from '../common/actionsEnums';

export interface DTUInfoState {
  databaseId : number, 
  percentage: number;
}

const defaultDTUInfoState: () => DTUInfoState = () => ({
  databaseId : 0,
  percentage: 0
});

export const dtuInfoReducer = (state = defaultDTUInfoState(), action) => {
  switch (action.type) {
    case actionsEnums.DTU_RATE_CHANGED:
      return handleDTURateAction(state, action.payload);
    case actionsEnums.DATABASE_CHANGED:
      return handleDatabaseChanged(state, action.payload);      
  }

  return state;
}

const handleDTURateAction = (state: DTUInfoState, percentage : number) => {
  return {
    ...state,
    percentage,
  };
}

const handleDatabaseChanged = (state: DTUInfoState, databaseId  : number) => {
  return {
    ...state,
    databaseId,
  };
}
