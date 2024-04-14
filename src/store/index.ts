import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { tvmazeApi } from './services/tvmazeApi';
import { detailsSlice } from './slices/detailsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    details: detailsSlice.reducer,
    [tvmazeApi.reducerPath]: tvmazeApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tvmazeApi.middleware), // Agrega el middleware de la API
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
