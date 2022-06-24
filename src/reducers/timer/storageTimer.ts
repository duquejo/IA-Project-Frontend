import { createSlice } from '@reduxjs/toolkit';

/**
 * Store State
 */
import { TimerState, TimerValues } from './storageTimerTypes';
import { RootState } from '../../store/index';

const initialState: TimerState = {
    timer: TimerValues.ACTIVE
};

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {

      /**
       * Start timer.
       * @param state
       */
      start: (state) => {
        state.timer = initialState.timer;
      },

      /**
       * Stop timer
       * @param state 
       */
      stop: (state) => {
        state.timer = TimerValues.PAUSED;
      },

      /**
       * Reset timer
       * @param state 
       */
      reset: (state) => {
        state.timer = TimerValues.RESET;
      },
    },
});

/**
 * Custom Selectors
 * @param state 
 * @returns 
 */
export const selectTimer = (state: RootState) => state.timer;

export const { start, stop, reset } = timerSlice.actions;

export default timerSlice.reducer;