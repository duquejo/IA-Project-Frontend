import React from 'react'
import { hot } from 'react-hot-loader/root';
import '../styles.css';

/**
 * Components
 */
import { MainContainer } from './Layouts/MainContainer';

export const App = hot(_App);
export function _App(): JSX.Element | null {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-cyan-300 via-blue-400 to-sky-500 bg-400% animate-background-animate">
            <MainContainer />
        </div>
    );
};
