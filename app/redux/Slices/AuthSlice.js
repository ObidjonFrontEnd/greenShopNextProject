import { createSlice } from '@reduxjs/toolkit';


const savedAuth = typeof window !== 'undefined' && localStorage.getItem('auth');
const initialState = savedAuth
  ? JSON.parse(savedAuth)
  : {
      token: null,
      name: null,
      surname: null,
      email: null,
      isAuthenticated: false,
    };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, name, surname, email } = action.payload;


      state.token = token;
      state.name = name;
      state.surname = surname;
      state.email = email;
      state.isAuthenticated = true;


      if (typeof window !== 'undefined') {
        localStorage.setItem(
          'auth',
          JSON.stringify({ token, name, surname, email, isAuthenticated: true })
        );
      }
    },

    logout: (state) => {
      state.token = null;
      state.name = null;
      state.surname = null;
      state.email = null;
      state.isAuthenticated = false;

      // localStorage ni tozalash
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth');
      }
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
