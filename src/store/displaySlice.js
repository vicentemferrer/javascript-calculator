import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    display: "",
    result: ""
}

export const displaySlice = createSlice({
    name: "display",
    initialState,
    reducers: {
        setDisplay: ({ display }, { payload }) => {
            display += payload.value
        },
        setResult: () => {}
    }
})