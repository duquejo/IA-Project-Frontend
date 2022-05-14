import React, { useEffect, useState } from 'react';
import { CanvasContainer } from '../Canvas/CanvasContainer';

export const MainContainer = (): JSX.Element | null => {

  const [word, setWord] = useState( () => {

    const words = [ 'stunning', 'knowledge', 'paralyzing', 'maintenance', 'wood', 'better' ];
    return words[ Math.floor(Math.random() * words.length) ].toLocaleUpperCase();
  });


  const [counter, setCounter] = useState(0);
  const [maxTime] = useState(60);

  useEffect(() => {

    const timeout = setTimeout( () => {
      setCounter(counter+1);
    }, 1000 );

    if( counter === maxTime ) {
      alert('You lost!');
      clearTimeout(timeout);
    }    

    // Cleaning
    return () => clearTimeout(timeout);
  }, [counter]);

  const progressBarCalculation = (): number => {
    return ( counter / maxTime ) * 100;
  };

  return (
    <>
      <h1 className="mb-3 drop-shadow-lg animate-[bounce_2s_infinite]">Let the AI hang-you... or not!</h1>
      <h3 className="mb-2">Colaborate with the AI drawing a letter into the screen</h3>
      <div className="max-w-screen-lg rounded-xl shadow-xl overflow-hidden flex align-center justify-center">
        <div className="grid grid-flow-row-dense grid-cols-2 gap-0">
          <CanvasContainer/>
          <div className="bg-gray-50 col-span-1 border-1 flex flex-col justify-end">

            {/* Hangman */}
            <div className="hangman p-3">
              <h4 className="italic text-sm">
                Get ready for the next challenge!
              </h4>
            </div>

            {/* Timer */}
            <div className="w-full bg-gray-200">
              <div className="bg-sky-400 text-xs font-bold text-white p-1 leading-none transition-all duration-500 text-right" style={{ width: `${progressBarCalculation()}%` }}>{ counter } s</div>
            </div>

            {/* Letters */}
            <div className="h-28 pb-6 pt-3 px-3 flex items-end gap-2">
              {
                !! word.length && word.split('').map( ( letter: string, index: number ) => (
                  <div key={ `letter-${ index }`} className="outline-none rounded-2xl w-full h-full text-center text-4xl font-extrabold bg-white flex justify-center items-center">{ letter }</div> 
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
