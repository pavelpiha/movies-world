import { MovieItemModel } from '../models/movieItem';
import moviesReducer, { moviesActions, MoviesState } from './moviesSlice';

describe('Movies reducer', () => {
  const state: MoviesState = {
    movie: new MovieItemModel(),
    movies: [],
    sortBy: 'release date',
    filters: [],
  };

  test('should handle initial state', () => {
    const initialState: MoviesState = state;
    const action = { type: 'unknown' };
    const expectedState = initialState;

    expect(moviesReducer(initialState, action)).toEqual(expectedState);
  });

  test('should handle setSorting', () => {
    const initialState: MoviesState = { ...state, sortBy: '' };
    const action = moviesActions.setSorting('title');
    const expectedState: MoviesState = { ...state, sortBy: 'title' };

    expect(moviesReducer(initialState, action)).toEqual(expectedState);
  });

  test('should add to favorites', () => {
    const initialState: MoviesState = { ...state, filters: [] };
    const action = moviesActions.setFilter(['Comedy']);
    const expectedState: MoviesState = { ...state, filters: ['Comedy'] };

    expect(moviesReducer(initialState, action)).toEqual(expectedState);
  });

  test('should remove from favorites', () => {
    const movie = new MovieItemModel();
    movie.title = 'xxx';
    const initialState: MoviesState = { ...state, movie: movie };
    const action = moviesActions.setMovie(movie);
    const expectedState: MoviesState = { ...state, movie: movie };

    expect(moviesReducer(initialState, action)).toEqual(expectedState);
  });
});
