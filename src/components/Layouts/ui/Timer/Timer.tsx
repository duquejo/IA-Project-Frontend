import React, { useEffect, useRef, useState, FC } from 'react';

// Redux
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import { selectTimer, stop, start } from '../../../../reducers/timer/storageTimer';
import { TimerValues } from '../../../../reducers/timer/storageTimerTypes';
import { selectGame, setModalStatus } from '../../../../reducers/game/storageGame';
import { ModalStatuses } from '../../../../reducers/game/storageGameTypes';

export const Timer: FC = (): JSX.Element | null => {

  const timerState = useAppSelector( selectTimer );
  const gameState = useAppSelector( selectGame );
  const dispatch = useAppDispatch();

  const duration = 90;
  const [counter, setCounter] = useState<number>(duration);

  const timer = useRef<any>();

  const setTimer = () => {
    if( counter <= 1 ) {
      dispatch( stop() );
      dispatch( setModalStatus( gameState.lifes >= 1 ? ModalStatuses.LOSE : ModalStatuses.GAMEOVER ) );
    }
    setCounter( counter - 1 );
  }

  useEffect(() => {
    if( timerState.timer === TimerValues.RESET ) {
      setCounter(duration);
      dispatch( start() );
    }
    if( timerState.timer === TimerValues.ACTIVE ) {
      timer.current = setTimeout( () => setTimer(), 1000 );
      return () => {
        if( timer.current ) {{
          clearTimeout( timer.current );
        }}
      } 
    }
  }, [timerState, counter]); 

  const progressBarCalculation = ( count: number ): number => ( ( count / duration ) * 100);

  return (
    <div className="w-full bg-gray-200 cursor-pointer">
      <div className="timer" style={{ width: `${ progressBarCalculation( counter ) }%` }}>
        { counter } seconds
      </div>
    </div>
  )
}
