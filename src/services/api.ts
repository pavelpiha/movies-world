import { HYDRATE } from 'next-redux-wrapper';

import { fromJSON, MovieItemModel, toJSON } from '../models/movieItem';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ApiProps {
  movieId?: string;
  searchEntry?: string;
  sortBy?: string;
  filters?: string[];
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  tagTypes: ['Movies'],
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getMovies: builder.query<any, ApiProps>({
      query: (arg) => {
        const { searchEntry, sortBy, filters } = arg;
        const path = 'movies?';
        const defaultParamsString = 'sortOrder=asc';
        const searchParams = new URLSearchParams(defaultParamsString);
        filters?.length ? searchParams.append('filter', filters.join(',')) : undefined;
        sortBy ? searchParams.append('sortBy', sortBy) : undefined;
        searchEntry ? searchParams.append('search', searchEntry) : undefined;
        searchParams.append('searchBy', 'title');
        return path.concat(searchParams.toString());
      },
      providesTags: ['Movies'],
      transformResponse: (response: { data: MovieItemModel[] }) => response.data.map((item) => fromJSON(item)),
    }),
    getMovieById: builder.query({
      query: (id: string | number) => `movies/${id}`,
      transformResponse: (response: MovieItemModel) => fromJSON(response),
    }),
    createMovie: builder.mutation<MovieItemModel, Omit<MovieItemModel, 'id'>>({
      query(data) {
        const { ...body } = toJSON(data);
        return {
          url: 'movies',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: [{ type: 'Movies' }],
    }),
    updateMovie: builder.mutation<MovieItemModel, MovieItemModel>({
      query(data) {
        const { ...body } = toJSON(data);
        return {
          url: 'movies',
          method: 'PUT',
          body,
        };
      },
      invalidatesTags: [{ type: 'Movies' }],
    }),
    deleteMovie: builder.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `movies/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (movie) => [{ type: 'Movies', id: movie.id }],
    }),
  }),
});
