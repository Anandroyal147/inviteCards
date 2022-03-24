import { createSlice } from '@reduxjs/toolkit'

export const windowSizeReducer = createSlice({
    name: 'screen',
    initialState: {
        value: false,
    },
    reducers: {
        smallScreen: (state) => {
            state.value = true
        },
        bigScreen: (state) => {
            state.value = false
        }
    },
})

// Action creators are generated for each case reducer function
export const { smallScreen, bigScreen } = windowSizeReducer.actions

export default windowSizeReducer.reducer