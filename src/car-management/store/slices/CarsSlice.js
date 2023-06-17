import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        list: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        addCar(state, action) {
            // action.payload = {name: abc, cost: 120}
            state.list.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
            });
        },
        removeCar(state, action) {
            state.list = state.list.filter((car) => car.id !== action.payload);
        }
    }
});

export const {changeSearchTerm, addCar, removeCar} = carSlice.actions;
export const carReducer = carSlice.reducer;