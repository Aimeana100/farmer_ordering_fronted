/* eslint-disable no-param-reassign */
// fertilizer.jsx

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import instance from '../API/axiosInstance';

// get all fertilizer
export const fetchFertilizer = createAsyncThunk(
  'fertilizer/fetchFertilizer',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('/fertilizer/all', { arg });
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

//  create fertilizer
export const createFertilizer = createAsyncThunk(
  'fertilizer/createFertilizer',
  async (fertilizer, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/fertilizer/create', fertilizer);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const fertilizerSlice = createSlice({
  name: 'fertilizer',
  initialState: {
    farmerfertilizer: {
      fertilizer: [],
      status: 'idle',
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Load fertilizer
      .addCase(fetchFertilizer.pending, (state) => {
        state.farmerfertilizer.status = 'loading';
      })
      .addCase(fetchFertilizer.fulfilled, (state, { payload }) => {
        state.farmerfertilizer = {
          ...state.farmerfertilizer,
          fertilizer: payload?.data,
          status: 'succeeded',
        };
      })
      .addCase(fetchFertilizer.rejected, (state, { payload, error }) => {
        state.farmerfertilizer = {
          ...state.farmerfertilizer,
          status: 'failed',
          error: error.message,
        };
      })
      // creating a new state fertilizer
      .addCase(createFertilizer.pending, (state) => {
        state.farmerfertilizer.status = 'loading';
      })
      .addCase(createFertilizer.fulfilled, (state, { payload }) => {
        Swal.fire(payload.message);

        state.farmerfertilizer = {
          ...state.farmerfertilizer,
          fertilizer: state.farmerfertilizer.fertilizer.concat(payload.data),
          status: 'succeeded',
        };
      })
      .addCase(createFertilizer.rejected, (state, { payload, error }) => {
        state.farmerfertilizer = {
          ...state.farmerfertilizer,
          status: 'failed',
          error: error.message,
        };
      });
  },
});

export default fertilizerSlice.reducer;
