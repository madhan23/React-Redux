import React from 'react';
import {connect} from 'react-redux';
import {createStore} from 'redux';
import {addActionHandle,squareActionHandle,asyncHandler} from"./store/action.js"

const Hello=(props)=>{
 
return (
  <div>
  <p> ADD Value {props.count}</p>
  <p> Multiple Value {props.sqrt}</p>
  
  <p>Result: {props.loading?<span>Loading..</span>:props.sum}</p>
  <button onClick={props.addUp}>Add</button>
   <button onClick={()=>props.mul(props.count)}>Square </button>
   <div style={{'margin':'10px'}}>
      <button onClick={()=>props.total(props.count,props.sqrt)}>Total</button>
      </div>
  </div>
)
}

// binding all state values to props
const  mapstatetoprops=(state)=>{
  return {
  count: state.add.count,
  sqrt: state.multiply.square,
  loading:state.loader.isLoading,
  sum:state.total.sum
  }
}
// binding action listener with dispatch event 
const mapDispatchtoprops=(dispatch)=>{
  return {
addUp: ()=>dispatch(addActionHandle()),
mul:(data)=>dispatch(squareActionHandle(data)),
total:(data1,data2)=>dispatch(asyncHandler(data1,data2)),
  }

}

// through connect method performs HOF 
export default  connect(mapstatetoprops,mapDispatchtoprops)(Hello)
