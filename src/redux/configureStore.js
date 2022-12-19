import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from './user/userSlice';
// import nameReducer from './foldername/nameSlice';

const store = configureStore({
  reducer: {
    // reducername: nameReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
