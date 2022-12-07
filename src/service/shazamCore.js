import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://exercisedb.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "c829e51d96msh3f46d8858dd3634p1e0f03jsn3635279837da"
      );
      return headers;
    },
  }),
  //get All exercises
  endpoints: (builder) => ({
    getExercise: builder.query({
      query: () => "/exercises",
      transformResponse: (data, _, { query, page, pageLength }) => {
        return data
          .filter(
            (item) =>
              item.bodyPart.includes(query) ||
              item.equipment.includes(query) ||
              item.name.includes(query) ||
              item.target.includes(query)
          )
          .slice((page - 1) * pageLength, page * pageLength);
      },
    }),
    getBodyPart: builder.query({ query: () => "/exercises/bodyPartList" }),
    getExerciseId: builder.query({
      query: ({ id }) => `/exercises/exercise/${id}`,
    }),
  }),
});
// export const getExercises = (exercises, query, page) => {};
export const {
  useGetExerciseQuery,
  useGetBodyPartQuery,
  useGetExerciseIdQuery,
} = shazamCoreApi;
