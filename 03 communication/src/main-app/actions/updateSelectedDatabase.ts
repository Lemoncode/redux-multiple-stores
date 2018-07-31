import {actionsEnums} from '../common/actionEnums';

export const updateUserProfileName = (databaseId : number) => ({  
    type: actionsEnums.UPDATE_SELECTED_DATABASE,
    payload : databaseId,  
});
