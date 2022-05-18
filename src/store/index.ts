import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import storageReducer from '../reducers/storage/storageReducer';

export const store = configureStore({
  reducer: {
    counter: storageReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;