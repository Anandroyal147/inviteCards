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




// increment: (state) => {
//     // Redux Toolkit allows us to write "mutating" logic in reducers. It
//     // doesn't actually mutate the state because it uses the Immer library,
//     // which detects changes to a "draft state" and produces a brand new
//     // immutable state based off those changes
//     state.value += 1
// },
// decrement: (state) => {
//     state.value -= 1
// },
// incrementByAmount: (state, action) => {
//     state.value += action.payload
// },