// src/context/listingsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchListings } from '../services/api';

export const getListings = createAsyncThunk('listings/getListings', async () => {
  const response = await fetchListings();
  return response.data;
});

const listingsSlice = createSlice({
  name: 'listings',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListings.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default listingsSlice.reducer;

