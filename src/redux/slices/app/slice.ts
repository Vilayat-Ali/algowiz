// lib
import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

type IApp = {
    isLoading: boolean;
};

const initialState: IApp = {
    isLoading: false,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        // toggle loading states
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }, 
    }
});

export const getAppState = (state: any) => state.app;
export const appReducer = appSlice.reducer;
export const {setLoading} = appSlice.actions;