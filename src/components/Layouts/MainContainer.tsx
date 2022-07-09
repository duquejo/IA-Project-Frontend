import React, { FC, useEffect, useState } from 'react';
import { CanvasContainer } from '../Canvas/CanvasContainer';
import { HangmanContainer } from './ui';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { start as startChallenge, selectGame } from '../../reducers/game/storageGame';
import { start as startTimer } from '../../reducers/timer/storageTimer';
import { setChallenge } from '../../utils';

type BuilderProps = {}

export const MainContainer: FC<BuilderProps> = (): JSX.Element | null => {

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
      <div className="flex relative">
        <div className="grid grid-flow-dense grid-cols-1 rounded-xl overflow-hidden shadow-xl sm:grid-cols-2">

          {/* CanvasContainer */}
          <CanvasContainer/>

          {/* HangmanUI */}
          <HangmanContainer usedLetters={ usedLetters } word={ word } />
        </div>
      </div>
  );
};
