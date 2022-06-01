import React, { FC } from 'react';

import { useAppSelector, useAppDispatch } from '../../../../hooks';
import { selectTimer, reset } from '../../../../reducers/timer/storageTimer';
import { minusLife, resetAttempt } from '../../../../reducers/game/storageGame';
import { TimerValues } from '../../../../reducers/timer/storageTimerTypes';

export interface IModalProps {
    open: boolean,
    content: string,
    title: string,
    btnText: string,
}

export const Modal: FC<IModalProps> = ({ open, content, title, btnText }): JSX.Element | null => {

    const timerState = useAppSelector( selectTimer );
    const dispatch = useAppDispatch();

    const handleClick = (): void => {
        if( timerState.timer === TimerValues.PAUSED ) {
            dispatch( reset() );
            dispatch( minusLife() );
            dispatch( resetAttempt() );
        }

        /**
         * @TODO: Continuar con la lógica de reseteo de vidas
         */
    };

    return open ? (
        <div className="animate-fade-in fixed inset-0 bg-black bg-opacity-70 overflow-y-auto h-full w-full flex z-10">
            <div className="w-1/3 h-1/3 p-5 rounded-xl shadow-lg bg-white m-auto flex flex-col justify-evenly z-20">
                <h1 className="text-black text-center mb-2">{ title }</h1>
                <p className="text-center">{ content }</p>
                <button className="modalButton" onClick={ handleClick }>{ btnText }</button>
            </div>
        </div>
    ) : null;
};
