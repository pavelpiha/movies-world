import { MovieItemModel } from '../models/movieItem';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  tagTypes: ['Movies'],
  endpoints: (builder) => ({
    getMovies: builder.query<any, { sortBy?: string; filters?: string[] }>({
      query: (arg) => {
        const { sortBy, filters } = arg;
        if (sortBy && filters?.length) {
          return `movies/?sortBy=${sortBy}&sortOrder=asc&filter=${filters}`;
        }
        if (!sortBy && filters?.length) {
          return `movies/?sortOrder=asc&filter=${filters}`;
        }
        if (sortBy && !filters?.length) {
          return `movies/?sortBy=${sortBy}&sortOrder=asc`;
        }
        return 'movies';
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
      invalidatesTags: (movie) => [{ type: 'Movies', id: movie.id }],
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
