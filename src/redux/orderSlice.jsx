/* eslint-disable no-param-reassign */
// orderSlice.jsx

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../API/axiosInstance';

// get all orders
export const fetchOrder = createAsyncThunk(
  'order/fetchOrder',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('/order/all');
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

//  create order
export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (order, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/order/create', order);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const seedSlice = createSlice({
  name: 'order',
  initialState: {
    farmerOrders: {
      orders: [],
      status: 'idle',
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Load orders
      .addCase(fetchOrder.pending, (state) => {
        state.farmerOrders.status = 'loading';
      })
      .addCase(fetchOrder.fulfilled, (state, { payload }) => {
        state.farmerOrders = {
          ...state.farmerOrders,
          orders: payload,
          status: 'succeeded',
        };
      })
      .addCase(fetchOrder.rejected, (state, { payload, error }) => {
        state.farmerOrders = {
          orders: payload,
          status: 'failed',
          error: error.message,
        };
      })
      // create order
      .addCase(createOrder.pending, (state) => {
        state.farmerOrders.status = 'loading';
      })
      .addCase(createOrder.fulfilled, (state, { payload }) => {
        state.farmerOrders = {
          ...state.farmerOrders,
          status: 'succeeded',
        };
      })
      .addCase(createOrder.rejected, (state, { payload, error }) => {
        state.farmerOrders = {
          status: 'failed',
          error: error.message,
        };
      });
  },
});

export default seedSlice.reducer;
