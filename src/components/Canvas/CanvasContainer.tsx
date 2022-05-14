import React, { useLayoutEffect, useRef, useState } from 'react';
import CanvasDraw, { CanvasDrawProps } from 'react-canvas-draw';

// interface ICanvasContainer {
//   width: number;
//   height: number;
// }

export const CanvasContainer: React.FC<any> = (): JSX.Element | null => {

  const currentCanvas = useRef<any>(null);

  const [canvas,_] = useState<any>({
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
    alert('Sent!');
  };

  const handlePassAway = () => {
    prompt('Are you sure?','yes');
  };

  return (
    <div className="bg-white w-full m-0 relative">
      <CanvasDraw { ...canvas } ref={ currentCanvas }/>
      <div id="controls" className="bg-slate-50 absolute bottom-0 h-28 pb-6 pt-3 px-3 w-full flex justify-between gap-2">
        <button className="text-xl font-bold m-auto w-full h-full rounded-2xl transition-all ease-in duration-100 hover:animate-pulse bg-white hover:bg-rose-700 hover:text-white" onClick={ handleEraseCanvas }>
          Erase
        </button>
        <button className="text-xl font-bold m-auto w-full h-full rounded-2xl transition-all ease-in duration-100 hover:animate-pulse bg-white hover:bg-amber-700 hover:text-white" onClick={ handleUndoCanvas }>
          Undo
        </button>
        <button className="text-xl font-bold m-auto w-full h-full rounded-2xl transition-all ease-in duration-100 hover:animate-pulse bg-white hover:bg-green-700 hover:text-white" onClick={ handleSendClick }>
         Send
        </button>
        <button className="text-xl font-bold m-auto w-full h-full rounded-2xl transition-all ease-in duration-100 hover:animate-pulse bg-white hover:bg-gray-900 hover:text-white" onClick={ handlePassAway }>
         Pass away
        </button>
      </div>
    </div>
  );
};
