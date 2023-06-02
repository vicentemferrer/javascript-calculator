import { createSlice } from "@reduxjs/toolkit";
import { operatorFilterDictionary as filterOps } from "../data/dictionaries";

const initialState = {
    display: "0",
    isResultSetted: false
}

export const displaySlice = createSlice({
    name: "display",
    initialState,
    reducers: {
        addNumber: (state, { payload }) => {
            if (state.display !== "0" && !state.isResultSetted) {
                state.display += `${payload}`
            } else {
                state.display = payload
                state.isResultSetted = false
            }
        },
        addOperator: (state, { payload }) => {
            const arrCache = state.display.trim().split(" ")
            const lastItem = arrCache[arrCache.length - 1]

            if (filterOps[lastItem] && filterOps[payload]) {
                arrCache.pop()
                state.display = arrCache.join(" ")
            }

            state.display += ` ${payload} `
            state.isResultSetted = false
        },
        castDecimal: (state, { payload }) => {
            if (!state.display.includes(payload)) {
                state.display += `${payload}`
                state.isResultSetted = false
            }
        },
        setResult: (state) => {
            try {
                state.display = `${eval(state.display)}`
            } catch (error) {
                state.display = `Syntax Error`
            }
            state.isResultSetted = true
        },
        setClear: (state) => {
            state.display = "0"
            state.isResultSetted = false
        }
    }
})

export const { addNumber, addOperator, castDecimal, setResult, setClear } = displaySlice.actions
export default displaySlice.reducer