import React from 'react';

export const SkeletonLetters = (): JSX.Element | null => {
    return (
        <div className="h-16 sm:h-24 pb-3 pt-3 px-3 flex items-end gap-2">
            { 
                Array.from({ length: 5 }, (_, i) => <div key={ i } className="letter cursor-not-allowed animate-pulse">_</div> )
            }
        </div>
    )
};
