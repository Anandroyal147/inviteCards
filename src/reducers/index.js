import { combineReducers } from "redux";
import signinReducer from './signinReducer'
import windowSizeReducer from './windowSizeReducer'
//import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    signIn: signinReducer,
    windowSize: windowSizeReducer
})

export default rootReducer;