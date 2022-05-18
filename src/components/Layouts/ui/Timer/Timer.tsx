import React, { useEffect, useRef, useState } from 'react';

export const Timer = (): JSX.Element | null => {

  const duration = 60;
  const [counter, setCounter] = useState(duration);
  const timer = useRef<any>();
  const setTimer = () => {
    if( counter > 0 ) {
      setCounter( counter - 1 );
    }
  }

  useEffect(() => {
    timer.current = setTimeout( () => setTimer(), 1000 );
    return () => {
      if( timer.current ) {{
        clearTimeout( timer.current );
      }}
    }

  }, [ counter ]);

  const progressBarCalculation = ( count: number ): number => ( ( count / duration ) * 100);

  return (
    <div className="w-full bg-gray-200 cursor-pointer">
      <div className="timer" style={{ width: `${ progressBarCalculation( counter ) }%` }}
      >
        { counter } seconds
      </div>
    </div>
  )
}
