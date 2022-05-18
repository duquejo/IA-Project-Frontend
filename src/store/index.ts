import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import storageGame from '../reducers/game/storageGame';
import storageReducer from '../reducers/storage/storageReducer';

export const store = configureStore({
  reducer: {
    counter: storageReducer,
    game: storageGame,
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