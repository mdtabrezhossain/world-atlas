import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "themeSlice",
    initialState: {
        theme: "dark"
    },
    reducers: {
        changeThemeAction: changeTheme
    }
});

function changeTheme(state) {
    state.theme = state.theme === "dark" ? "light" : "dark";
}

export const { changeThemeAction } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;