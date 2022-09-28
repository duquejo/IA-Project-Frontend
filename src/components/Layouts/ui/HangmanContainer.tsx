import React, { FC } from 'react'
import { Clues, Hangman, Letters, Timer, UsedLetters, User, SkeletonLetters } from './index';

type BuilderProps = {
    usedLetters: Array<string>,
    word: string|null,
};

export const HangmanContainer: FC<BuilderProps> = ({ usedLetters, word }): JSX.Element | null => {
  return (
    <div className="bg-gray-50 col-span-1 border-1 flex flex-col justify-end w-full md:w-[476px] order-first sm:order-none">
        <div className="grid grid-cols-2 px-3 pt-3 md:grid-cols-3 relative">
            {/* Hangman */}
            <Hangman />
            {/* Used Letters */}
            <UsedLetters usedLetters={ usedLetters }/>
            {/* User-UI */}
            <User/>            
        </div>
        <div className="lowerSection">
            {/* Clues */}
            <Clues />
            { /* Timer */}
            <Timer />
            { word ? <Letters/> : <SkeletonLetters /> }
        </div>
    </div>
  )
}
