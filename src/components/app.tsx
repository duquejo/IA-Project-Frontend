import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import '../styles.css';
/**
 * Components
 */
import { MainContainer } from './Layouts/MainContainer';
import { IModalProps } from './Layouts/ui/Modal/Modal';
import { useAppSelector } from '../hooks/index';
import { selectTimer } from '../reducers/timer/storageTimer';
import { TimerValues } from '../reducers/timer/storageTimerTypes';


export const App = hot(_App);
export function _App(): JSX.Element | null {

    const timerState = useAppSelector( selectTimer );

    const modalProps: IModalProps = {};
    const [modalConfig, setModalConfig] = useState<IModalProps>(modalProps);
    
    const mainContainerProps = {
        modalProps: modalConfig,
    };

    const activateModalByState = ( state: TimerValues ): void => {
        switch ( state ) {
            case TimerValues.PAUSED:
                return setModalConfig({ open: true });
            case TimerValues.RESET:
                return setModalConfig({ open: false });
        }
    };

    useEffect(() => {
        /**
         * Modal handler by TimerState tag.
         */
        activateModalByState( timerState.timer );
    }, [ timerState.timer ]);
    
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-cyan-300 via-blue-400 to-sky-500 bg-400% animate-background-animate">
            <MainContainer { ...mainContainerProps }/>
        </div>
    );
}
