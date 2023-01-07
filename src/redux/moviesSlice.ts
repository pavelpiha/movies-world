import { HYDRATE } from 'next-redux-wrapper';

import { MovieItemModel } from '../models/movieItem';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MoviesState {
  movie: MovieItemModel | null;
  movies: MovieItemModel[];
  sortBy: string;
  filters: string[];
}

const initialState: MoviesState = {
  movie: null,
  movies: [],
  sortBy: 'release date',
  filters: [],
};

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
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.movies,
    }),
  },
});

export const moviesActions = slice.actions;
export default slice.reducer;
