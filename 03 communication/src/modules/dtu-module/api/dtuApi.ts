
// fake api
// TODO: return a promise and move actions to thunk or sagas
export const getDTUInfo = (databaseId : number) => {
  
  switch(databaseId) {
    case 1: 
      return 5;
    case 2: 
      return 12;      
  }

  return -1;
}