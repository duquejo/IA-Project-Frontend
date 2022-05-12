import React, { useState } from 'react';
import CanvasDraw from 'react-canvas-draw';

interface ICanvasContainer {
  width: number;
  height: number;
}

export const CanvasContainer: React.FC<ICanvasContainer> = ({ width, height }): JSX.Element | null => {

  console.log( width, height );

  const [canvas,_] = useState({
    canvasWidth: width,
    canvasHeight: height,
    brushRadius: 10,
    lazyRadius: 15,
    hideGrid: true,
    gridColor: '#FFFFFF',
    className: 'canvas'
  });

  return (
    <>
      <CanvasDraw { ...canvas }/>
    </>
  );
};
