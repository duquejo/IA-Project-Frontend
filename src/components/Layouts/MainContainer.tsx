import React, { FC, useEffect, useState } from 'react';
import { CanvasContainer } from '../Canvas/CanvasContainer';
import { Title } from './global';
import { Clues, Hangman, Letters, Timer, UsedLetters } from './ui';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { start as startChallenge, selectGame } from '../../reducers/game/storageGame';
import { start as startTimer } from '../../reducers/timer/storageTimer';

import { Letters as SkeletonLetters } from './ui/Skeleton/Letters';
import { IModalProps, Modal } from './ui/Modal/Modal';

import { setChallenge } from '../../utils';

type BuilderProps = {
  modalProps: IModalProps
}

export const MainContainer: FC<BuilderProps> = ({ modalProps }): JSX.Element | null => {

  const dispatch = useAppDispatch();
  const gameState = useAppSelector( selectGame );  
  const [word, setWord] = useState<string|null>(null);

  const [usedWord, setUsedWord] = useState<Array<string>>([]);
  const [usedLetters, setUsedLetters] = useState<Array<string>>([]);

  /**
   * Exclude repeated words.
   */  
  const excludeRepeatedWords = (): string => {
    let word = '';
    let unique = false;
    while( ! unique ) {
      word = setChallenge( gameState.level );
      if( ! usedWord.includes( word ) ) {
        setUsedWord([ ...usedWord, word ]);
        unique = true;
      }
    }
    return word;
  };

  useEffect( () => {

    if( ! gameState.challenge ) {

      const challenge = excludeRepeatedWords();

      dispatch( startChallenge( challenge ) );
      dispatch( startTimer() );
      setWord( challenge );
    }

    if( usedLetters !== gameState.usedLetters ) {
      setUsedLetters( gameState.usedLetters );
    }

  }, [word, gameState.challenge, gameState.usedLetters] );

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

            <div className="grid grid-cols-3 px-3 pt-3">

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
                word ? <Letters/> : <SkeletonLetters />
              }
            </div>
          </div>
        </div>
      </div>

      <Modal { ...modalProps }/>
    </>
  );
};
