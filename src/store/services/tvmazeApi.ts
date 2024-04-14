// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Episode } from '../../types/types';

interface Series {
  data: object;
}

// Define a service using a base URL and expected endpoints
export const tvmazeApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.tvmaze.com/' }),
  endpoints: builder => ({
    getAllSeries: builder.query<Series[], void>({
      query: () => '/shows?page=0',
    }),
    getEpisodesById: builder.query<Episode[], number>({
      query: id => `/shows/${id}/episodes`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetAllSeriesQuery, useGetEpisodesByIdQuery } = tvmazeApi;
