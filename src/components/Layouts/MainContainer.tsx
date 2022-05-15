import React, { useState } from 'react';
import { CanvasContainer } from '../Canvas/CanvasContainer';
import { Hangman } from './Hangman';
import { Timer } from './Timer';

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
      <h1 className="mb-3 drop-shadow-lg animate-[bounce_2s_infinite]">Don't Let AI hang-you... or yes?</h1>
      <h3 className="mb-2">Colaborate with the Artifial Intelligence drawing letters into the screen before your character dies</h3>
      <div className="max-w-screen-lg rounded-xl shadow-xl overflow-hidden flex align-center justify-center">
        <div className="grid grid-flow-row-dense grid-cols-2">

          {/* CanvasContainer */}
          <CanvasContainer/>

          {/* UI */}
          <div className="bg-gray-50 col-span-1 border-1 flex flex-col justify-end">

            <div className="hangman-container grid grid-cols-3 px-3 pt-3">
              <Hangman />
              <div id="usedWords" className="col-span-1">
                <h4 className="font-semibold">Used letters</h4>
                <div className="grid gap-2 grid-cols-5 pt-2">
                  {
                    !! usedLetters.length && usedLetters.map( (letter: string, index: number ) => (
                      <div key={ index } 
                          className="rounded-md bg-white w-5 h-5 text-center text-sm cursor-pointer">{ letter }</div>
                    ))
                  }
                </div>
              </div>
            </div>

            {/* Clues */}
            <div id="clue" className="px-3 pb-3">
              <h5 className="text-sm">Tricks</h5>
              <p className="italic text-sm">
                Get ready for the next challenge!
              </p>
            </div>

            { /* Timer */}
            <Timer />

            {/* Letters */}
            <div className="h-28 pb-6 pt-3 px-3 flex items-end gap-2">
              {
                !! word.length && word.split('').map( ( letter: string, index: number ) => (
                  <div key={ `letter-${ index }`} className="cursor-pointer outline-none rounded-2xl w-full h-full text-center text-4xl font-extrabold bg-white flex justify-center items-center">{ letter }</div> 
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
