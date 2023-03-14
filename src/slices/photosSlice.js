import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    list: [],
    favorites: [],
  },
  reducers: {
    setPhotos: (state, action) => {
      state.list = action.payload;
    },
    addToFavorites: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter((item) => item.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPhotos, addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
