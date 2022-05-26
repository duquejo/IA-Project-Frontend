import React, { FC } from 'react';

export interface IModalProps {
    open: boolean,
    content: string,
    title: string
}

export const Modal: FC<IModalProps> = ({ open, content, title }): JSX.Element | null => {
    return open ? (
        <div className="animate-fade-in fixed inset-0 bg-black bg-opacity-60 overflow-y-auto h-full w-full flex">
            <div className="animate-fade-in delay-300 w-1/3 h-1/3 p-5 rounded-xl shadow-lg bg-white m-auto flex flex-col justify-evenly">
                <h1 className="text-black text-center mb-2">{ title }</h1>
                <p className="text-center">{ content }</p>
                <button className="modalButton">Retry!</button>
            </div>
        </div>
    ) : null;
};
