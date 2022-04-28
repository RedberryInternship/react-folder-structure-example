import { configureStore } from '@reduxjs/toolkit';
import loginSlice from 'state/login';

const store = configureStore({
  reducer: {
    loginSlice,
  },
});

export default store;
