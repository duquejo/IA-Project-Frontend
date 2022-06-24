import React from 'react';

export const Letters = (): JSX.Element | null => {
    return (
        <div className="h-24 pb-6 pt-3 px-3 flex items-end gap-2">
            <div className="letter cursor-not-allowed animate-pulse">_</div>
            <div className="letter cursor-not-allowed animate-pulse">_</div>
            <div className="letter cursor-not-allowed animate-pulse">_</div>
            <div className="letter cursor-not-allowed animate-pulse">_</div>
            <div className="letter cursor-not-allowed animate-pulse">_</div>
            <div className="letter cursor-not-allowed animate-pulse">_</div>
            <div className="letter cursor-not-allowed animate-pulse">_</div>
            <div className="letter cursor-not-allowed animate-pulse">_</div>
        </div>
    )
};
