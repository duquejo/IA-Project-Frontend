import React from 'react'
import { hot } from 'react-hot-loader/root';
import '../styles.css';

/**
 * Components
 */
import { MainContainer, Footer } from './Layouts';

export const App = hot(_App);
export function _App(): JSX.Element | null {
    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
            <MainContainer />
            <Footer />
        </div>
    );
};
