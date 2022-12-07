import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const youtube = createApi({
  reducerPath: "youtube",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube-v31.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "c829e51d96msh3f46d8858dd3634p1e0f03jsn3635279837da"
      );
      return headers;
    },
  }),
  //get All related videos
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: (id) => `/video/related?id=YQHsXMglC9A`,
    }),
  }),
});

export const { useGetVideosQuery } = youtube;
