import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    show: false
}

export const showSlice = createSlice({
    name: 'navToggle',
    initialState,
    reducers: {
        toggle: (state) => {
            state.show = !state.show;
        }
    }
})

export const { toggle } =  showSlice.actions;
export default showSlice.reducer;