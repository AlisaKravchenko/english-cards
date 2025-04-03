import { createSlice } from "@reduxjs/toolkit";
import { changeTheme } from "../utils";


const initialState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')).home : {
    finishFirstInit: localStorage.getItem('first-visit') || false,
    theme: 'light',
}
const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers:{
        finishFirstInit(state, action){
            state.finishFirstInit = action.payload
        },
        stateChangeTheme(state, action){
            state.theme = action.payload
            changeTheme(action.payload)
        }
    }
})
export default homeSlice.reducer
export const {finishFirstInit, stateChangeTheme} = homeSlice.actions