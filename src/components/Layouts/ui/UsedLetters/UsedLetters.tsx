// import React, { useState, useEffect } from 'react';
import React, { FC } from 'react';

type BuilderProps = {
    usedLetters: Array<string>
}

export const UsedLetters: FC<BuilderProps> = ({ usedLetters }) => {
    return (
        <div id="usedLetters" className="col-span-1">
            <h4 className="font-semibold">Used letters</h4>
            <div className="grid gap-2 grid-cols-5 pt-2">
                {
                    !! usedLetters.length && usedLetters.map( (letter: string, index: number ) => (
                        <div key={ index } 
                                className="rounded-md bg-white w-5 h-5 text-center text-sm cursor-pointer">
                            { letter }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
