import React, { useRef, useState } from 'react';
import CanvasDraw, { CanvasDrawProps } from 'react-canvas-draw';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { selectCount, increment } from '../../reducers/storage/storageReducer';

// interface ICanvasContainer {
//   width: number;
//   height: number;
// }

export const CanvasContainer: React.FC<any> = (): JSX.Element | null => {

  const currentCanvas = useRef<any>(null);
  const count = useAppSelector( selectCount );
  const dispatch = useAppDispatch();

  const [canvas,_] = useState<CanvasDrawProps>({
    canvasWidth: 500,
    canvasHeight: 500,
    brushRadius: 7,
    lazyRadius: 0,
    gridColor: '#FFFFFF',
  });

  const handleEraseCanvas = () => {
    currentCanvas.current.clear();
  };

  const handleUndoCanvas = () => {
    currentCanvas.current.undo();
  };

  const handleSendClick = () => {
    console.log('Sent!');
    dispatch( increment() );
  };

  const handlePassAway = () => {
    prompt('Are you sure?','yes');
    // Stop timer
  };

  return (
    <div className="bg-white w-full m-0 relative">

      {/* @TODO */}
      <p className="absolute">{ count }</p>

      <CanvasDraw { ...canvas } ref={ currentCanvas }/>
      
      <div id="controls" className="bg-slate-50 absolute bottom-0 h-24 pb-6 pt-3 px-3 w-full flex justify-between gap-2">
        <button className="canvasButton" onClick={ handleEraseCanvas }>
          Erase
        </button>
        <button className="canvasButton" onClick={ handleUndoCanvas }>
          Undo
        </button>
        <button className="canvasButton" onClick={ handleSendClick }>
         Send
        </button>
        <button className="canvasButton" onClick={ handlePassAway }>
         Pass away
        </button>
      </div>
    </div>
  );
};
