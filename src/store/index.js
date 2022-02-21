import { configureStore } from '@reduxjs/toolkit'
import screeenReducer from '../reducers/windowSizeReducer'
export default configureStore({
    reducer: {
        screen: screeenReducer
    },
})