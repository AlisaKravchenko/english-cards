import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    finishFirstInit: localStorage.getItem('first-visit') || false
}
const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers:{
        finishFirstInit(state, action){
            state.finishFirstInit = action.payload
        },

    }
})
export default homeSlice.reducer
export const {finishFirstInit} = homeSlice.actions