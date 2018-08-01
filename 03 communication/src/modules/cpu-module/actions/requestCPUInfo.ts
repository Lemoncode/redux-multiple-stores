import {actionsEnums} from '../common/actionsEnums';
import {getCPUInfo} from '../api/cpuApi';

// TODO: api should return a promise and move this to thunk or saga
export const requestInfoCPU = (id : number) => ({  
    type: actionsEnums.CPU_RATE_CHANGED,
    payload : getCPUInfo(id),  
});