import {createSlice, configureStore, createAction} from '@reduxjs/toolkit';

export const reset = createAction("reset-all-playlist");

const songsSlice = createSlice({
    name: 'Song',
    initialState: ['k tui bol'],
    reducers: {
        addSong(state, action) {
            state.push(action.payload)
        },
        removeSong(state, action) {
            state.splice(state.indexOf(action.payload), 1);
        },

    },
    extraReducers: (builder) => {
        builder.addCase(reset, (state, action) => {
            return [];
        });
    }
});

const movieSlice = createSlice({
    name: 'Movie',
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload);
        },
        removeMovie(state, action) {
            state.splice(state.indexOf(action.payload), 1);
        },
    },
    extraReducers(builder) {
        builder.addCase(reset, () => {
            return [];
        });
    }
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: movieSlice.reducer,
    }
});

export { store }
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = movieSlice.actions;

