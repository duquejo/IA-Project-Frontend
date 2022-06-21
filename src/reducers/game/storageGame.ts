import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Store State
 */
import { GameState, ModalStatuses } from './storageGameTypes';
import { RootState } from '../../store/index';

const initialState: GameState = {
  level: 1,
  challenge: null,
  usedLetters: [],
  lifes: 3,
  attempt: 0,
  modalStatus: ModalStatuses.LOSE,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {

    /**
     * Start game.
     * @param state 
       * @param state 
     * @param state 
     * @param action 
       * @param action 
     * @param action 
     */
    start: ( state, action: PayloadAction<string> ) => {
      state.challenge = action.payload
    },

    /**
     * AddLetter
     * @param state 
       * @param state 
     * @param state 
     * @param action 
       * @param action 
     * @param action 
     */
    addLetter: (state, action: PayloadAction<string> ) => {
      state.usedLetters.indexOf( action.payload ) === -1 && state.usedLetters.push( action.payload );
    },

    /**
     * Reset Used Letters
     * @param state 
       * @param state 
     * @param state 
     */
    resetLetters: (state) => {
      state.usedLetters = [];
    },

    /**
     * Level up
     * @param state
     */
    addLevel: (state) => {
      state.level += 1;
    },

    /**
     * Decrement life
     * @param state 
       * @param state 
     * @param state 
     */
    minusLife: (state) => {
      state.lifes -= 1;
    },

    /**
     * Add attempt
     * @param state 
       * @param state 
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
    },

    /**
     * Toggle modal status (Without repeat statuses)
     * @param state 
     */
    setModalStatus: (state, action: PayloadAction<ModalStatuses> ) => {
      if( action.payload === ModalStatuses.LOSE && state.modalStatus === ModalStatuses.WIN ) {
        state.modalStatus = ModalStatuses.LOSE;
      } else if ( action.payload === ModalStatuses.WIN && state.modalStatus === ModalStatuses.LOSE ) {
        state.modalStatus = ModalStatuses.WIN;
      } else if ( action.payload === ModalStatuses.GAMEOVER ) {
        state.modalStatus = ModalStatuses.GAMEOVER;
      }
    },
  },
});

/**
 * Custom Selectors
 * @param state 
 * @returns 
 */
export const selectGame = (state: RootState) => state.game;

export const { 
  start,
  addLetter,
  minusLife,
  addAttempt,
  resetAttempt,
  resetLetters,
  addLevel,
  setModalStatus,
} = gameSlice.actions;

export default gameSlice.reducer;