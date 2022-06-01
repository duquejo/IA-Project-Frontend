import React, { useRef, useState } from 'react';
import CanvasDraw, { CanvasDrawProps } from 'react-canvas-draw';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { addLetter, addAttempt, selectGame } from '../../reducers/game/storageGame';
import { getRandomLetter } from '../../utils';


export const CanvasContainer = (): JSX.Element | null => {

  const currentCanvas = useRef<CanvasDraw>(null);
  const dispatch = useAppDispatch();
  const gameState = useAppSelector( selectGame );

  const [canvas] = useState<CanvasDrawProps>({
    canvasWidth: 500,
    canvasHeight: 500,
    brushRadius: 7,
    lazyRadius: 0,
    gridColor: '#FFFFFF',
  });

  const handleEraseCanvas = () => {
    currentCanvas.current?.clear();
  };

  const handleUndoCanvas = () => {
    currentCanvas.current?.undo();
  };

  const handleSendClick = () => {
    console.log('Sent!');

    const letter = getRandomLetter();
    const { challenge } = gameState;

    
    /**
     * Check if is correct.
     */
    console.log({ 
      letter,
      includes: challenge?.includes( letter ),
      challenge
    });
    
    if( ! challenge?.includes( letter ) ) {
      dispatch( addAttempt() );
    }
    
    dispatch( addLetter( letter ) );
  };

  const handlePassAway = () => {
    // Stop timer
    prompt('Are you sure?','yes');
  };

  return (
    <div className="bg-white w-full m-0 relative">

      <CanvasDraw { ...canvas } ref={ currentCanvas }/>
      
      <div id="controls" className="bg-slate-50 absolute bottom-0 h-24 pb-6 pt-3 px-3 w-full flex justify-between gap-2">
        <button className="canvasButton hover:bg-red-700" onClick={ handleEraseCanvas }>
          Erase
        </button>
        <button className="canvasButton hover:bg-blue-700" onClick={ handleUndoCanvas }>
          Undo
        </button>
        <button className="canvasButton hover:bg-green-700" onClick={ handleSendClick }>
         Send
        </button>
        <button className="canvasButton hover:bg-amber-700" onClick={ handlePassAway }>
         Give up
        </button>
      </div>
    </div>
  );
};
