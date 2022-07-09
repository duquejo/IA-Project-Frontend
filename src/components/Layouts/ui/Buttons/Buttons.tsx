import React, { FC } from 'react';
import { stop } from '../../../../reducers/timer/storageTimer';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { addAttempt, addLetter, addLevel, selectGame, setModalStatus } from '../../../../reducers/game/storageGame';
import { ModalStatuses } from '../../../../reducers/game/storageGameTypes';

type BuilderProps = {
    canvas: any
};

export const Buttons: FC<BuilderProps> = ({ canvas }): JSX.Element | null => {

    const dispatch = useAppDispatch();
    const gameState = useAppSelector( selectGame );

    const handleEraseCanvas = () => {
        canvas.current?.clear();
    };

    const handleUndoCanvas = () => {
        canvas.current?.undo();
    };

    const handleSendClick = () => {

        const canvasImg = canvas.current?.getDataURL();
        console.log( 'Canvas pasted into console.' );
        console.log( canvasImg );

        let letter = prompt('Type a letter' )?.toUpperCase();
        if( ! letter ) letter = '';

        const { challenge, usedLetters } = gameState;

        /**
         * Check if its correct.
         */
        console.log({ 
            letter,
            includes: challenge?.includes( letter ),
            exists: challenge?.includes( letter ) && usedLetters.includes( letter ),
            challenge
        });

        /**
         * If isn't into the challenge or If was added as a successful value and is inserted again.
         */
        if( ! challenge?.includes( letter ) || challenge?.includes( letter ) && usedLetters.includes( letter ) ) {
            dispatch( addAttempt() );
            dispatch( setModalStatus( gameState.lifes >= 1 ? ModalStatuses.LOSE : ModalStatuses.GAMEOVER ) );
        } else {

            /**
             * Successful letter, add it.
             */
            let equality = 0;
            const splittedChallenge = challenge.split('');
            splittedChallenge.forEach( ( challengeLetter: string ) => {
            if( [ letter, ...usedLetters ].includes( challengeLetter ) ) {
                equality++;
            }
            });

            if( equality === splittedChallenge.length ) {
            dispatch( stop() );
            dispatch( addLevel() );
            dispatch( setModalStatus( ModalStatuses.WIN ) );
            console.log('You win!');
            }
        }

        dispatch( addLetter( letter ) );

        // Clear
        canvas.current?.clear();
    };

    const handlePassAway = () => {
        dispatch( stop() );
        dispatch( setModalStatus( ModalStatuses.LOSE ) );
    };

    return (
        <div id="controls" className="bg-slate-50 absolute bottom-0 h-16 sm:h-24 pb-3 pt-3 px-3 w-full flex justify-between gap-2">
            <button className="canvasButton hover:bg-red-700" onClick={ handleEraseCanvas }>Erase</button>
            <button className="canvasButton hover:bg-blue-700" onClick={ handleUndoCanvas }>Undo</button>
            <button className="canvasButton hover:bg-green-700" onClick={ handleSendClick }>Send</button>
            <button className="canvasButton hover:bg-amber-700" onClick={ handlePassAway }>Give up</button>
        </div>
    );
}
