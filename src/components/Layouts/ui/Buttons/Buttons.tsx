import React, { FC } from 'react';
import { stop } from '../../../../reducers/timer/storageTimer';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { addAttempt, addLetter, addLevel, selectGame, setModalStatus } from '../../../../reducers/game/storageGame';
import { ModalStatuses } from '../../../../reducers/game/storageGameTypes';
import { fetchRecognition } from '../../../../utils/index';

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

    const handleSendClick = async () => {

        const canvasImg = canvas.current?.getDataURL( 'jpeg', false, '#ffffff' );
        console.log( 'Canvas pasted into console.' );

        const { data, message } = await fetchRecognition( canvasImg );

        console.log( canvasImg );
        console.log( data, message );
        
        // let letter = prompt('Type a letter' )?.toUpperCase();
        // if( ! letter ) letter = '';

        const { challenge, usedLetters } = gameState;

        /**
         * Check if its correct.
         */
        console.log({ 
            letter: data.letter,
            includes: challenge?.includes( data.letter ),
            exists: challenge?.includes( data.letter ) && usedLetters.includes( data.letter ),
            challenge
        });

        /**
         * If isn't into the challenge or If was added as a successful value and is inserted again.
         */
        if( ! data.recognized || ! challenge?.includes( data.letter ) || challenge?.includes( data.letter ) && usedLetters.includes( data.letter ) ) {
            dispatch( addAttempt() );
            dispatch( setModalStatus( gameState.lifes >= 1 ? ModalStatuses.LOSE : ModalStatuses.GAMEOVER ) );
        } else {

            /**
             * Successful letter, add it.
             */
            let equality = 0;
            const splittedChallenge = challenge.split('');
            splittedChallenge.forEach( ( challengeLetter: string ) => {
            if( [ data.letter, ...usedLetters ].includes( challengeLetter ) ) {
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

        /**
         * Only add recognized letters.
         */
        if( data.recognized ) {
            dispatch( addLetter( data.letter ) );
        }

        // Clear
        canvas.current?.clear();
    };

    const handlePassAway = () => {
        dispatch( stop() );
        dispatch( setModalStatus( gameState.lifes > 1 ? ModalStatuses.LOSE : ModalStatuses.GAMEOVER ) );
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
