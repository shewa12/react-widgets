import {createSlice, configureStore} from '@reduxjs/toolkit';

const songsSlice = createSlice({
    name: 'Song',
    initialState: ['k tui bol'],
    reducers: {
        addSong(state, action) {
            state.push(action.payload)
        },
        removeSong(state, action) {

        }
    }
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer
    }
});
console.log(store.getState());