import React, { FC } from 'react';

type BuilderProps = {
    usedLetters: Array<string>
};

export const UsedLetters: FC<BuilderProps> = ({ usedLetters }) => {
    return (
        <div id="usedLetters" className="col-span-1">
            <h5 className="font-bold">Used letters</h5>
            <div className="grid gap-2 grid-cols-5 py-2 md:pb-0">
                { 
                    !! usedLetters?.length ? 
                        usedLetters.map( (letter: string, index: number ) => <div key={ index } className="rounded-md bg-white w-5 h-5 text-center text-sm cursor-pointer">{ letter }</div> ) 
                    : <p className="italic">None</p>
                }
            </div>
        </div>
    );
}
