import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./CarsSlice";

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: 0
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload;
        },
        changeCost(state, action) {
            state.cost = action.payload;
        }
    },
    // List addCar action and reset car states
    extraReducers: builder => {
        builder.addCase(addCar, (state, action) => {
            state.cost = 0;
            state.name = ''
        });
    }
});
export const {changeName, changeCost} = formSlice.actions;
export const formReducer = formSlice.reducer;