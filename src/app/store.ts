import { configureStore } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Serie, Episode } from './interfaces.ts'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.tvmaze.com/' }),//url de base 
  //pour cree les endpoints(urls) pour les requetes de la serie, des episodes et d'un episode par id
    endpoints: (builder) => ({
        //nom de chaque endpoint et la requete correspondante 
    getSeries: builder.query<Serie>({
      query: () => 'shows/1955',//requete pour la serie
    }),
    getEpisodes: builder.query<Episode[]>({
      query: () => 'shows/1955/episodes',//requete pour les episodes
    }),
    getEpisodeById: builder.query<Episode>({
      query: (id) => `episodes/${id}`, //requete pour un episode par id
    }),
  }),
})
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
})
//les hooks cree automatiquement par RTK Query pour chaque endpoint
export const { useGetSeriesQuery, useGetEpisodesQuery, useGetEpisodeByIdQuery } = api 