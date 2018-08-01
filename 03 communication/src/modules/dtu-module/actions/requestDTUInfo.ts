import {actionsEnums} from '../common/actionsEnums';
import {getDTUInfo} from '../api/dtuApi';

// TODO: api should return a promise and move this to thunk or saga
export const requestInfoDTU = (id : number) => ({  
    type: actionsEnums.DTU_RATE_CHANGED,
    payload : getDTUInfo(id),  
});