import React from 'react'
import { getRandomTrick } from '../../../../utils';

export const Clues = ():  JSX.Element | null => {
  return (
    <div id="clue" className="px-3 pb-3">
        <h5 className="font-bold">Tips & Tricks</h5>
        <p className="italic text-sm">{ getRandomTrick() }</p>
    </div>
  )
};
