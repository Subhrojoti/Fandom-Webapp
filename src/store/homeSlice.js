import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
    bookmark: [],
  },
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGeners: (state, action) => {
      state.genres = action.payload;
    },
    addBookmark: (state, action) => {
      state.bookmark = [...state.bookmark, action?.payload];
    },
    removeBookmark: (state, action) => {
      state.bookmark = state?.bookmark?.filter(
        (item) => item?.id !== action?.payload?.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGeners, addBookmark, removeBookmark } =
  homeSlice.actions;

export default homeSlice.reducer;
