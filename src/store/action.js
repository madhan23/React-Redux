export const addActionHandle=()=>{
return {
  type:"ADD"
}
}


export const squareActionHandle=(data)=>{
return {
  type:"MUL",
  data
}
}

export const  itemsIsLoading =(bool) =>{
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export const totalSumActionHandle=(data1,data2)=>{
return {
  type:"TOTAL",
  data1,
  data2
}
}



// react thunk for async op

export const asyncHandler=(data1,data2)=>{
return  (dispatch)=> {
  dispatch(itemsIsLoading(true))
  setTimeout(()=>{
dispatch(totalSumActionHandle(data1,data2))
dispatch(itemsIsLoading(false))
  },5000)

};
}