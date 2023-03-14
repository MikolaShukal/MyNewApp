import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlise';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
