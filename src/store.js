// store.js
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from "../src/pages/Login/loginSlice"; // Import your login slice

export default configureStore({
  reducer: {
    login: loginReducer, // Add your login reducer here
    // Add other reducers if you have them
  },
});
