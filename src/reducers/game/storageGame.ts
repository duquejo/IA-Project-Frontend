import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Store State
 */
import { GameState } from './storageGameTypes';
import { RootState } from '../../store/index';

const initialState: GameState = {
    level: 1,
    challenge: null,
    usedLetters: [],
    lifes: 5,
    attempt: 0,
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {

      /**
       * Start game.
       * @param state 
       * @param action 
       */
      start: ( state, action: PayloadAction<string> ) => {
        state.challenge = action.payload
      },

      /**
       * AddLetter
       * @param state 
       * @param action 
       */
      addLetter: (state, action: PayloadAction<string> ) => {
        state.usedLetters.indexOf( action.payload ) === -1 && state.usedLetters.push( action.payload );
      },

      /**
       * Reset Used Letters
       * @param state 
       */
      resetLetters: (state) => {
        state.usedLetters = [];
      },

      /**
       * Decrement life
       * @param state 
       */
      minusLife: (state) => {
        state.lifes -= 1;
      },

      /**
       * Add attempt
       * @param state 
       */
      addAttempt: (state) => {
        state.attempt += 1;
      },

      /**
       * Reset attempt
       * @param state
       */
      resetAttempt: (state) => {
        state.attempt = initialState.attempt;
      }
    },
});

/**
 * Custom Selectors
 * @param state 
 * @returns 
 */
export const selectGame = (state: RootState) => state.game;

export const { start, addLetter, minusLife, addAttempt, resetAttempt, resetLetters } = gameSlice.actions;

export default gameSlice.reducer;