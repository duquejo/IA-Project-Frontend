import React, { FC } from 'react';

type BuilderProps = {
    letters: string
};

export const Letters: FC<BuilderProps> = ({ letters }): JSX.Element | null => {
  return (
    <div className="h-24 pb-6 pt-3 px-3 flex items-end gap-2">
    {
      !! letters.length && letters.split('').map( ( letter: string, index: number ) => (
        <div key={ `letter-${ index }`} 
             className="cursor-pointer outline-none rounded-2xl w-full h-full text-center text-4xl font-extrabold bg-white flex justify-center items-center">
            { letter }
        </div> 
      ))
    }
    </div>
  )
};
