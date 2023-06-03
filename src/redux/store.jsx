import { configureStore } from '@reduxjs/toolkit';
import userSlice from './auth';
import seedSlice from './seedSlice';
import ferilizerSlice from './ferilizerSlice';
import orderSlice from './orderSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    seed: seedSlice,
    fertilizer: ferilizerSlice,
    orders: orderSlice,
  },
});

export default store;
