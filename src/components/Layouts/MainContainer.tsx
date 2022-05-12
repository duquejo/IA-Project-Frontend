import React, { useLayoutEffect, useRef, useState } from 'react';
import { CanvasContainer } from '../Canvas/CanvasContainer';

export const MainContainer = (): JSX.Element | null => {

  const containerRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  const props = {
    width,
    height
  };


  const getContainerSize = () => {
    if( containerRef.current !== null ) {
      const width = containerRef.current.clientWidth;
      setWidth(width);

      const height = containerRef.current.clientHeight;
      setHeight(height);
    }
  };

  useLayoutEffect( () => {
    window.addEventListener( 'resize', getContainerSize );
  }, [ getContainerSize ] );

  return (
    <>
      <h1 className="mb-6 drop-shadow-lg animate-[bounce_2s_infinite]">Fun game!</h1>
      <div className="bg-slate-100 w-2/3 h-2/4 lg:w-500 lg:h-500 rounded-xl shadow-xl overflow-hidden
      flex align-center justify-center" ref={containerRef}>
        <CanvasContainer { ...props }/>
      </div>
    </>
  );
};
