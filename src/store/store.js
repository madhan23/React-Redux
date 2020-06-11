
import { combineReducers, createStore,applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import {addReducer,subReducer,loadingstatusReducer,totalReducer} from "./reducers"



// Binding multiple reducers into combineReducers
const rootReducer = combineReducers({
  add:addReducer,
  multiply:subReducer,
  loader:loadingstatusReducer,
  total:totalReducer
})

// add applyMiddleware applyMiddleware method and  pass thunk reference
const store=createStore(rootReducer,applyMiddleware(thunk));

export default store