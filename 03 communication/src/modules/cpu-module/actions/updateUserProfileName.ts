import {actionsEnums} from '../common/actionsEnums';

export const databaseChanged = (id : string) => ({  
    type: actionsEnums.DATABASE_CHANGED,
    payload : id,  
});
