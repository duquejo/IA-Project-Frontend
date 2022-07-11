import React, { useRef, useState } from 'react';
import CanvasDraw, { CanvasDrawProps } from 'react-canvas-draw';
import { Buttons } from '../Layouts/ui';

export const CanvasContainer = (): JSX.Element | null => {

  const currentCanvas = useRef<any>(null);

  const [canvas] = useState<CanvasDrawProps>( () => {

    // Calc canvas width (based on screen)
    const screenDimentions = Number(window.innerWidth);
    console.log( screenDimentions );
    let canvasWidth: number;
    if ( screenDimentions <= 360 ) {
      canvasWidth = 308;
    } else if ( screenDimentions > 360  && screenDimentions <= 768 ){
      canvasWidth = 364;
    } else {
      canvasWidth = 476;
    }

    return {
      canvasWidth: canvasWidth,
      canvasHeight: canvasWidth,
      brushRadius: 7,
      lazyRadius: 0,
      gridColor: '#FFFFFF',
    };
  });

  return (
    <div className="canvasContainer bg-white relative md:w-[476px] w-full overflow-x-hidden">
      <CanvasDraw { ...canvas } ref={ currentCanvas }/>
      <Buttons canvas={ currentCanvas }/>
    </div>
  );
};
