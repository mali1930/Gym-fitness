import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  query: "",
  pageLength: 9,
};

export const Exercises = createSlice({
  name: "exercises",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    handlePrev: (state) => {
      if (state.page > 1) {
        state.page -= 1;
      }
    },
    handleNext: (state) => {
      if (state.page >= 1) {
        state.page += 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleNext, handlePrev, setQuery } = Exercises.actions;

export default Exercises.reducer;
