/* eslint-disable no-param-reassign */
// seedSLice.jsx

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import instance from '../API/axiosInstance';

// get all seeds
export const fetchSeeds = createAsyncThunk(
  'seeds/fetchSeeds',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('/seeds/all', { arg });
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

//  create seed
export const createSeed = createAsyncThunk(
  'seeds/createSeed',
  async (seed, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/seeds/create', seed);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

// update seed
export const updateSeed = createAsyncThunk(
  'seeds/updateSeed',

  async (seed, { rejectWithValue }) => {
    try {
      const { data } = await instance.put(
        `/api/seed/update/${seed._id}`,
        seed.body
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const seedSlice = createSlice({
  name: 'seeds',
  initialState: {
    farmerSeeds: {
      seeds: [],
      status: 'idle',
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Load seeds
      .addCase(fetchSeeds.pending, (state) => {
        state.farmerSeeds.status = 'loading';
      })
      .addCase(fetchSeeds.fulfilled, (state, { payload }) => {
        state.farmerSeeds = {
          ...state.farmerSeeds,
          seeds: payload.data,
          status: 'succeeded',
        };
      })
      .addCase(fetchSeeds.rejected, (state, { payload, error }) => {
        state.farmerSeeds = {
          seeds: payload,
          status: 'failed',
          error: error.message,
        };
      })
      // create seeds
      .addCase(createSeed.pending, (state) => {
        state.farmerSeeds.status = 'loading';
      })
      .addCase(createSeed.fulfilled, (state, { payload }) => {
        Swal.fire(payload.message);

        state.farmerSeeds = {
          ...state.farmerSeeds,
          seeds: payload.data,
          status: 'succeeded',
        };
      })
      .addCase(createSeed.rejected, (state, { payload, error }) => {
        state.farmerSeeds = {
          seeds: payload,
          status: 'failed',
          error: error.message,
        };
      });
  },
});

export default seedSlice.reducer;
