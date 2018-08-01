import {actionsEnums} from '../common/actionsEnums';

export const databaseChanged = (id : number) => ({  
    type: actionsEnums.DATABASE_CHANGED,
    payload : id,  
});
