import { MovieItemModel } from '../models/movieItem';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  movie: new MovieItemModel(),
  movies: [],
  sortBy: 'release date',
  filters: [],
} as { movie: MovieItemModel | null; movies: MovieItemModel[]; sortBy: string; filters: string[] };

const slice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSorting: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    setFilter: (state, action: PayloadAction<string[]>) => {
      state.filters = action.payload;
    },
    setMovie: (state, action: PayloadAction<MovieItemModel>) => {
      state.movie = action.payload;
    },
  },
});

export const moviesActions = slice.actions;
export default slice.reducer;
