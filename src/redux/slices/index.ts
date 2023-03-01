// lib
import {combineReducers} from "@reduxjs/toolkit";

// reducers
import { appReducer } from "./app/slice";

export const rootReducer = combineReducers({
    appReducer
});

export type RootState = ReturnType<typeof rootReducer>