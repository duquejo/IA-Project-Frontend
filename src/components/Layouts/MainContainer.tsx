import React, { FC, useEffect, useState } from 'react';
import { CanvasContainer } from '../Canvas/CanvasContainer';
import { Title } from './global';
import { Clues, Hangman, Letters, Timer, UsedLetters } from './ui';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { start as startChallenge, selectGame } from '../../reducers/game/storageGame';
import { start as startTimer } from '../../reducers/timer/storageTimer';

import { Letters as SkeletonLetters } from './ui/Skeleton/Letters';
import { IModalProps, Modal } from './ui/Modal/Modal';

type BuilderProps = {
  modalProps: IModalProps
}

export const MainContainer: FC<BuilderProps> = ({ modalProps }): JSX.Element | null => {

  const dispatch = useAppDispatch();
  const gameState = useAppSelector( selectGame );  
  const [word, setWord] = useState<string|null>(null);
  const [usedLetters, setUsedLetters] = useState<Array<string>>([]);

  const setChallenge = () => {
    const words = [ 'stunning', 'knowledge', 'paralyzing', 'maintenance', 'wood', 'better' ];
    return words[ Math.floor(Math.random() * words.length) ].toLocaleUpperCase();
  };

  useEffect( () => {

    if( ! gameState.challenge ) {
      const challenge = setChallenge();
      dispatch( startChallenge( challenge ) );
      dispatch( startTimer() );
      setWord( challenge );
    }

    if( usedLetters !== gameState.usedLetters ) {
      setUsedLetters( gameState.usedLetters );
    }

  }, [gameState] );

  return (
    <>

      {/* Title */}
      <Title />

      <div className="max-w-screen-lg rounded-xl shadow-xl overflow-hidden flex align-center justify-center">
        <div className="grid grid-flow-row-dense grid-cols-2">

          {/* CanvasContainer */}
          <CanvasContainer/>

          {/* UI */}
          <div className="bg-gray-50 col-span-1 border-1 flex flex-col justify-end">

            <div className="hangman-container grid grid-cols-3 px-3 pt-3">

              {/* Hangman */}
              <Hangman />

              {/* Used Letters */}
              <UsedLetters usedLetters={ usedLetters }/>

            </div>

            <div className="lowerSection">

              {/* Clues */}
              <Clues />

              { /* Timer */}
              <Timer />

              {
                /* Hangman letters  */
                word ? <Letters word={ word } /> : <SkeletonLetters />
              }
            </div>
          </div>
        </div>
      </div>

      <Modal { ...modalProps }/>
    </>
  );
};
