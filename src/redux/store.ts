// lib
import { configureStore } from "@reduxjs/toolkit";

import {rootReducer} from "./slices";

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>