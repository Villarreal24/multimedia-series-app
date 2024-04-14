// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import type { Pokemon } from './types'

interface Series {
  data: object;
}

// Define a service using a base URL and expected endpoints
export const tvmazeApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.tvmaze.com/' }),
  endpoints: builder => ({
    // getPokemonByName: builder.query<Pokemon, string>({
    //   query: name => `pokemon/${name}`,
    // }),
    getAllSeries: builder.query<Series[], void>({
      query: () => '/shows?page=0',
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  // useGetPokemonByNameQuery,
  useGetAllSeriesQuery,
} = tvmazeApi;
