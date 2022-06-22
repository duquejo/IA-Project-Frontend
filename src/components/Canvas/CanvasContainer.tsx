import React, { useCallback, useEffect, useRef, useState } from 'react';
import CanvasDraw, { CanvasDrawProps } from 'react-canvas-draw';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { addLetter, addAttempt, selectGame, addLevel, setModalStatus } from '../../reducers/game/storageGame';
import { ModalStatuses } from '../../reducers/game/storageGameTypes';
import { stop } from '../../reducers/timer/storageTimer';

type ChangeEvent = KeyboardEvent | React.MouseEvent;

export const CanvasContainer = (): JSX.Element | null => {

  const currentCanvas = useRef<CanvasDraw>(null);
  const dispatch = useAppDispatch();
  const gameState = useAppSelector( selectGame );

  const [canvas] = useState<CanvasDrawProps>({
    canvasWidth: 470,
    canvasHeight: 470,
    brushRadius: 7,
    lazyRadius: 0,
    gridColor: '#FFFFFF',
  });

  const handleEraseCanvas = useCallback(( e: ChangeEvent ) => {
    if( ( e as KeyboardEvent ).code === 'KeyE' || ( e as React.MouseEvent ).type === 'click' ) {
      currentCanvas.current?.clear();
    }
  }, [] );

  const handleUndoCanvas = useCallback(( e: ChangeEvent ) => {
    if( ( e as KeyboardEvent ).code === 'KeyU' || ( e as React.MouseEvent ).type === 'click' ) {
      currentCanvas.current?.undo();
    }
  }, [] );

  const handleSendClick = useCallback(( e: ChangeEvent ) => {

    /**
     * @TODO: Solve double keypress propagation
     */

    e.stopPropagation();
    if( ( e as KeyboardEvent ).code === 'KeyS' || ( e as React.MouseEvent ).type === 'click' ) {

      let letter = prompt('Type a letter' )?.toUpperCase();
      if( ! letter ) letter = '';

      const { challenge, usedLetters } = gameState;
      
      /**
       * Check if its correct.
       */
      console.log({ 
        letter,
        includes: challenge?.includes( letter ),
        exists: challenge?.includes( letter ) && usedLetters.includes( letter ),
        challenge
      });
      
      /**
       * If isn't into the challenge or If was added as a successful value and is inserted again.
       */
      if( ! challenge?.includes( letter ) || challenge?.includes( letter ) && usedLetters.includes( letter ) ) {
        dispatch( addAttempt() );
        dispatch( setModalStatus( gameState.lifes >= 1 ? ModalStatuses.LOSE : ModalStatuses.GAMEOVER ) );
      } else {

        /**
         * Successful letter, add it.
         */
        let equality = 0;
        const splittedChallenge = challenge.split('');
        splittedChallenge.forEach( ( challengeLetter: string ) => {
          if( [ letter, ...usedLetters ].includes( challengeLetter ) ) {
            equality++;
          }
        });

        if( equality === splittedChallenge.length ) {
          dispatch( stop() );
          dispatch( addLevel() );
          dispatch( setModalStatus( ModalStatuses.WIN ) );
          console.log('You win!');
        }
      }

      dispatch( addLetter( letter ) );

      // Clear
      currentCanvas.current?.clear();

    }
  }, [] );

  const handlePassAway = () => {
    // Stop timer
    prompt('Are you sure?');
    dispatch( stop() );
    dispatch( setModalStatus( ModalStatuses.LOSE ) );
  };

  useEffect(() => {
    window.addEventListener( 'keydown', ( event: KeyboardEvent ) => handleEraseCanvas( event ) );
    window.addEventListener( 'keydown', ( event: KeyboardEvent ) => handleUndoCanvas( event ) );
    window.addEventListener( 'keydown', ( event: KeyboardEvent ) => handleSendClick( event ) );
    return () => {
      window.removeEventListener( 'keydown', ( event: KeyboardEvent ) => handleEraseCanvas( event ) );
      window.removeEventListener( 'keydown', ( event: KeyboardEvent ) => handleUndoCanvas( event ) );
      window.removeEventListener( 'keydown', ( event: KeyboardEvent ) => handleSendClick( event ) );      
    }
  }, []);
   

  return (
    <div className="bg-white w-full m-0 relative">

      <CanvasDraw { ...canvas } ref={ currentCanvas }/>
      
      <div id="controls" className="bg-slate-50 absolute bottom-0 h-24 pb-6 pt-3 px-3 w-full flex justify-between gap-2">
        <button className="canvasButton hover:bg-red-700" onClick={ ( event: React.MouseEvent ) => handleEraseCanvas( event ) }>
          ( E )rase
        </button>
        <button className="canvasButton hover:bg-blue-700" onClick={ ( event: React.MouseEvent ) => handleUndoCanvas( event ) }>
          ( U )ndo
        </button>
        <button className="canvasButton hover:bg-green-700" onClick={ ( event: React.MouseEvent ) => handleSendClick( event ) }>
         ( S )end
        </button>
        <button className="canvasButton hover:bg-amber-700" onClick={ handlePassAway }>
         Give up
        </button>
      </div>
    </div>
  );
};
