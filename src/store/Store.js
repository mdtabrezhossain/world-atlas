import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./slices/ThemeSlice.js";

export const store = configureStore(
    {
        reducer: {
            themeReducer: themeReducer
        }
    }
);