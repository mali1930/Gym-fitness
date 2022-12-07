import { configureStore } from "@reduxjs/toolkit";
import exercisesReducer from "./slices/exercises";
import { shazamCoreApi } from "../service/shazamCore";
import { youtube } from "../service/youtube";
export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    [youtube.reducerPath]: youtube.reducer,
    exercises: exercisesReducer, // exercises
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare()
      .concat(youtube.middleware)
      .concat(shazamCoreApi.middleware),
});
