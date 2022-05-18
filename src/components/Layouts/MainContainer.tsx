import React, { useEffect, useState } from 'react';
import { CanvasContainer } from '../Canvas/CanvasContainer';
import { Title } from './global';
import { Clues, Hangman, Letters, Timer, UsedLetters } from './ui';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { start, selectGame } from '../../reducers/game/storageGame';

export const MainContainer = (): JSX.Element | null => {

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
      dispatch( start( challenge ) );
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
                /* Hangman letters */
                !! word && <Letters word={ word } />
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
