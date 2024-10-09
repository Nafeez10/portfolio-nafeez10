import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "../slices/pageSlice";
import navMobileSlice from "../slices/navMobileSlice";
import themeSlice from "../slices/themeSlice";

const store = configureStore({
    reducer:{
        page : pageSlice,
        navMobile : navMobileSlice,
        theme : themeSlice
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;