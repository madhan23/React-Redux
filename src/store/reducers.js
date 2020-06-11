const initialstate={
  count:0
}
export const  addReducer=(state=initialstate,action)=>{
const newState={...state}
if(action.type=="ADD"){
  return {
    ...state,
    count:state.count+1
  }
}
return newState;
}

const value={
  square:0
}
export const subReducer=(state=value,action)=>{
const newState={...state}
if(action.type=="MUL"){
  return {
    ...state,
    square:action.data*action.data
  }
}
return newState;
}

const intialstateValue={
sum :0
}
export const totalReducer=(state=intialstateValue,action)=>{
const newState={...state}
if(action.type=="TOTAL"){
  return {
    ...state,
    sum:action.data1+action.data2
  }
}
return newState;
}

export const  loadingstatusReducer=(state=false,action)=>{
if(action.type=='ITEMS_IS_LOADING'){
 return { isLoading:action.isLoading}
}
return state;
}