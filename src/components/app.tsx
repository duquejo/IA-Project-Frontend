import React from 'react'
import { hot } from 'react-hot-loader/root';
import '../styles.css';

export const App = hot(_App);
export function _App(): JSX.Element | null {
    return (
        <div>
            <h1 className="bg-slate-100">Hello world!</h1>
        </div>
    );
};
