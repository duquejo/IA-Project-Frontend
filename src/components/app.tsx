import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import '../styles.css';
/**
 * Components
 */
import { MainContainer } from './Layouts/MainContainer';
import { IModalProps, Modal } from './Layouts/ui/Modal/Modal';
import { useAppSelector } from '../hooks/index';
import { selectTimer } from '../reducers/timer/storageTimer';
import { TimerValues } from '../reducers/timer/storageTimerTypes';
import { selectGame } from '../reducers/game/storageGame';
import { ModalStatuses } from '../reducers/game/storageGameTypes';
import { Footer, Title } from './Layouts/global';

export const App = hot(_App);
export function _App(): JSX.Element | null {

    const timerState = useAppSelector( selectTimer );
    const gameState = useAppSelector( selectGame );

    const modalProps: IModalProps = {};
    const [modalConfig, setModalConfig] = useState<IModalProps>(modalProps);

    const activateModalByState = ( state: TimerValues ): void => {
        switch ( state ) {
            case TimerValues.PAUSED: {
                let modalStatus: IModalProps = {};
                if( gameState.modalStatus === ModalStatuses.WIN ) {
                    modalStatus = {
                        content: 'Excellent', 
                        title: 'You win!', 
                        btnText: 'Next level!',
                    };
                } else if( gameState.modalStatus === ModalStatuses.GAMEOVER ) {
                    modalStatus = {
                        content: 'Try again in a few minutes!',
                        title: 'Oww no!',
                    };
                } 
                return setModalConfig({ open: true, ...modalStatus });
            }
            case TimerValues.RESET: {
                return setModalConfig({ open: false });
            }
        }
    };

    useEffect(() => {
        /**
         * Modal handler by TimerState tag.
         */
        activateModalByState( timerState.timer );
    }, [ timerState.timer ]);
    
    return (
        <>
            <div className="mt-24 md:mt-0 md:h-screen flex flex-col justify-center items-center relative">
                {/* Title */}
                <Title />            
                <MainContainer />
                <Modal { ...modalConfig }/>             
            </div>
            {/* Footer */}
            <Footer />
        </>
    );
}
