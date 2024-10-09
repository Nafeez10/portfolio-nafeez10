import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

type themeType = "light" | "dark"

type initialStateType = {
    theme: themeType
}

const initialState : initialStateType = {
    theme:"dark"
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers:{
        changeTheme:( state, action:PayloadAction<themeType>)=>{
            state.theme = action.payload;
        }
    }
})

export const getCurrentTheme = ( state: RootState ) => state.theme.theme;

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer