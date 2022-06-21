import React, { FC } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../hooks';
import { selectTimer, reset } from '../../../../reducers/timer/storageTimer';
import { minusLife, resetAttempt, resetLetters, selectGame, start as startChallenge } from '../../../../reducers/game/storageGame';
import { TimerValues } from '../../../../reducers/timer/storageTimerTypes';
import { ModalStatuses } from '../../../../reducers/game/storageGameTypes';

export interface IModalProps {
    open?: boolean,
    content?: string,
    title?: string,
    btnText?: string,
}

export const Modal: FC<IModalProps> = ({
        open = false,
        content = 'Nice try!', 
        title = 'You lost', 
        btnText = 'Try again',
    }): JSX.Element | null => {

    const timerState = useAppSelector( selectTimer );
    const gameState = useAppSelector( selectGame );
    const dispatch = useAppDispatch();

    const handleClick = (): void => {
        if( timerState.timer === TimerValues.PAUSED ) {
            dispatch( reset() );
            dispatch( resetAttempt() );
            dispatch( startChallenge( '' ) );
            dispatch( resetLetters() );

            /**
             * Minus lifes only if the current status is lose.
             */
            if( gameState.modalStatus === ModalStatuses.LOSE ) {
                dispatch( minusLife() );
            }
        }
    };

    const refreshPage = () => window.location.reload();

    return open ? (
        <div className="animate-fade-in fixed inset-0 bg-black bg-opacity-70 overflow-y-auto h-full w-full flex z-10">
            <div className="w-1/3 h-1/3 p-5 rounded-xl shadow-lg bg-white m-auto flex flex-col justify-evenly z-20">
                <h1 className="text-black text-center mb-2">{ title }</h1>
                <p className="text-center">{ content }</p>
                { 
                    gameState.modalStatus !== ModalStatuses.GAMEOVER ? 
                    <button className="modalButton" onClick={ handleClick }>{ btnText }</button>
                    : <button className="modalButton" onClick={ refreshPage }>Restart game</button>
                }
            </div>
        </div>
    ) : null;
};
