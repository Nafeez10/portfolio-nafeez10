import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

type initialStateType = {
    showNavMobile:Boolean
}

const initialState : initialStateType = {
    showNavMobile:false
}

const navMobileSlice = createSlice({
    name:"navMobile",
    initialState,
    reducers:{
        changeShowNavMobile(state, action:PayloadAction<Boolean>){
            state.showNavMobile = action.payload;
        }
    }
})

export const getShowNavMObile = (state:RootState) => state.navMobile.showNavMobile;

export const { changeShowNavMobile } = navMobileSlice.actions

export default navMobileSlice.reducer