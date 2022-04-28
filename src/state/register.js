import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  email: '',
  password: '',
  repeatPassword: '',
};

export const loginSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setRepeatPassword: (state, action) => {
      state.repeatPassword = action.payload;
    },
  },
});

export const { setUsername, setPassword } = loginSlice.actions;

export default loginSlice.reducer;
