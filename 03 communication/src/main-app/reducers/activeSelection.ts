import { actionsEnums } from "../common/actionEnums";

export interface ActiveSelectionState {
  databaseId : number;
}

const defaultSelectionState: () => ActiveSelectionState = () => ({
  databaseId: 1
});

export const activeSelectionReducer = (state = defaultSelectionState(), action) => {
  switch (action.type) {
    case actionsEnums.UPDATE_SELECTED_DATABASE:
      return handleSelectionDatabaseAction(state, action.payload);
  }

  return state;
}

const handleSelectionDatabaseAction = (state: ActiveSelectionState, databaseId : number) : ActiveSelectionState => {
  return {
    ...state,
    databaseId: databaseId,
  };
}
