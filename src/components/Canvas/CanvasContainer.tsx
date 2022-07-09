import React, { useRef, useState } from 'react';
import CanvasDraw, { CanvasDrawProps } from 'react-canvas-draw';
import { Buttons } from '../Layouts/ui';

export const CanvasContainer = (): JSX.Element | null => {

  const currentCanvas = useRef<any>(null);

  const [canvas] = useState<CanvasDrawProps>( () => {

    // // Calc canvas width (based on screen)
    // const canvasWidth = ( window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth ) <= 768 ? 308 : 476;
    // console.log( window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth );

    return {
      canvasWidth: 476,
      canvasHeight: 476,
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
