import { combineReducers } from "redux";
import signinReducer from './signinReducer'
import windowSizeReducer from './windowSizeReducer'
//import { configureStore } from '@reduxjs/toolkit'
import { alert } from "./alertReducer";
import { authentication } from "./authenticationReducer";
import { registration } from "./registerReducer";
const rootReducer = combineReducers({
    signIn: signinReducer,
    windowSize: windowSizeReducer,
    alert: alert,
    auth: authentication,
    register: registration
})

export default rootReducer;