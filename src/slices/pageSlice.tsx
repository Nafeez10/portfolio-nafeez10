import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

type currentPageType = "Home" | "About" | "Projects" | "Skills" | "Contact"

type initialStateType = {
    currentPage : currentPageType
}

const initialState : initialStateType = {
    currentPage: "Home"
}
 
const pageSlice = createSlice({
    name:"page",
    initialState,
    reducers:{
        changePage(state, action:PayloadAction<currentPageType>){
            state.currentPage = action.payload
        }
    }
})

export const getCurrentPage = (state:RootState) => state.page.currentPage;

export const { changePage } = pageSlice.actions

export default pageSlice.reducer
