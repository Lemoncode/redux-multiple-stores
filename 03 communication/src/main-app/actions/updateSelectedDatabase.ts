import {emitter} from '../../common/infrastructure'
import {databaseChangeEventId} from '../../common/const';
import {actionsEnums} from '../common/actionEnums';

export const updateSelectedDatabase = (databaseId : number) => {
  // Emit event to notify any listener new databaseId
  emitter.emit(databaseChangeEventId, databaseId);

  return {  
    type: actionsEnums.UPDATE_SELECTED_DATABASE,
    payload : databaseId,  
  }
}
