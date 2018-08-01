
// fake api
// TODO: return a promise and move actions to thunk or sagas
export const getCPUInfo = (databaseId : number) => {
  
  switch(databaseId) {
    case 1: 
      return 30;
    case 2: 
      return 80;      
  }

  return -1;
}