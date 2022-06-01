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

    const modalProps: IModalProps = {
        open: false,
        content: 'Nice try!',
        title: 'You lost!'
    };
    
    const [modalConfig, setModalConfig] = useState<IModalProps>(modalProps);
    
    const mainContainerProps = {
        modalProps: modalConfig,
    };

    useEffect(() => {
        console.log( timerState );
        if( timerState.timer === TimerValues.PAUSED ) {
            setModalConfig({
                ...modalProps,
                open: true,
            });
        }
    }, [ timerState.timer ]);
    
    
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-cyan-300 via-blue-400 to-sky-500 bg-400% animate-background-animate">
            <MainContainer { ...mainContainerProps }/>
        </div>
    );
}
