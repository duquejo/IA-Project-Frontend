import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { storageReducer, storageGame, storageTimer } from '../reducers';

export const store = configureStore({
  reducer: {
    counter: storageReducer,
    game: storageGame,
    timer: storageTimer,
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