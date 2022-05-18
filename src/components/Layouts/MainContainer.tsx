import React, { useState } from 'react';
import { CanvasContainer } from '../Canvas/CanvasContainer';
import { Title } from './global';
import { Clues, Hangman, Letters, Timer, UsedLetters } from './ui';

export const MainContainer = (): JSX.Element | null => {

  const [word] = useState( () => {
    const words = [ 'stunning', 'knowledge', 'paralyzing', 'maintenance', 'wood', 'better' ];
    return words[ Math.floor(Math.random() * words.length) ].toLocaleUpperCase();
  });

  const [usedLetters] = useState<Array<string>>([
    'A', 'E', 'C', 'Z', 'P', 'O', 'U', 'A', 'E', 'C', 'Z', 'P', 'O', 'U', 'A'
  ]);

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
              <UsedLetters usedLetters={ usedLetters } />          
            </div>

            <div className="lowerSection">
              {/* Clues */}
              <Clues />
              { /* Timer */}
              <Timer />
              {/* Hangman letters */}
              <Letters letters={ word } />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
