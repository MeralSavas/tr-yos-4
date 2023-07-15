import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name: "info",

  initialState: {
    univercities:null,
    departments:null,
    error: false,
  },

  
  reducers: {
    fetchStart: (state) => {
      state.error = false;
    },
    getUniSuccess: (state, { payload }) => {
      state.univercities = payload;
    },

    getDepSuccess:(state, { payload })=> {
      state.departments = payload;
    },
  
    fetchFail: (state) => {
      state.error = true;
    },
  },
});



export const {
  fetchStart,
  getUniSuccess,
  fetchFail,
  getDepSuccess
  
} = infoSlice.actions;

export default infoSlice.reducer;