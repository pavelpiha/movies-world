import { MovieItemModel } from '../models/movieItem';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  tagTypes: ['Movies'],
  endpoints: (builder) => ({
    getMovies: builder.query<any, { sortBy?: string; filters?: string[] }>({
      query: (arg) => {
        const { sortBy, filters } = arg;
        const path = 'movies?';
        const defaultParamsString = 'sortOrder=asc';
        const searchParams = new URLSearchParams(defaultParamsString);
        filters?.length ? searchParams.append('filter', filters.join(',')) : undefined;
        sortBy ? searchParams.append('sortBy', sortBy) : undefined;
        return path.concat(searchParams.toString());
      },
      providesTags: ['Movies'],
      transformResponse: (response: { data: MovieItemModel[] }) =>
        response.data.map((item) => MovieItemModel.fromJSON(item)),
    }),
    getMovieById: builder.query({
      query: (id: string | number) => `movies/${id}`,
      transformResponse: (response: { data: MovieItemModel }) => MovieItemModel.fromJSON(response.data),
    }),
    createMovie: builder.mutation<MovieItemModel, Omit<MovieItemModel, 'id'>>({
      query(data) {
        const { ...body } = MovieItemModel.toJSON(data);
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
        const { ...body } = MovieItemModel.toJSON(data);
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
