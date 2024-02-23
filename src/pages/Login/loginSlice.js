// loginSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    cpf: '',
    email: '',
    password: ''
  },
  reducers: {
    setCpf: (state, action) => {
      state.cpf = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    resetForm: state => {
      state.cpf = '';
      state.email = '';
      state.password = '';
    }
  }
});

export const { setCpf, setEmail, setPassword, resetForm } = loginSlice.actions;

export default loginSlice.reducer;
