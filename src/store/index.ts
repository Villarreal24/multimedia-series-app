import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { tvmazeApi } from './services/tvmazeApi';
import { detailsSlice } from './slices/detailsSlice';
import { seasonsSlice } from './slices/seasonsSlice';

export const store = configureStore({
  reducer: {
    details: detailsSlice.reducer,
    seasons: seasonsSlice.reducer,
    [tvmazeApi.reducerPath]: tvmazeApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      tvmazeApi.middleware,
    ),
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
