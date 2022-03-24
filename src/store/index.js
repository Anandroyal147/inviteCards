import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers'
import screeenReducer from '../reducers/windowSizeReducer'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// export default configureStore({
//     reducer: {
//         screen: screeenReducer,

//     },

// })
const loggerMiddleware = createLogger();

export default createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )

)