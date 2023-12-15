import { createSlice } from "@reduxjs/toolkit";

export const homeslice = createSlice({
    name: "home",
    initialState: {
        user: {},
        links: {},
    },
    reducers: {
        getLinks: (state, action) => {
            state.links = action.payload;
        },
        getUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getLinks, getUser } = homeslice.actions;

export default homeslice.reducer;
